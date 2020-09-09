const express = require("express");
const router = express.Router();
const db = require("../config/db");
const { v4: uuidv4 } = require("uuid");

const conn = db.conn;

//create category auto ID generation
const createCategoryQuery = (categoryName,categoryImg,totalProducts)=>{
    const data = {
      categoryId: uuidv4(),
      categoryName,
      categoryImg,
      totalProducts 
    };
    return data;
}

//Get ALL CATEGORIES

router.get("/", async (req, res) => {
 await conn.query("SELECT * FROM categories", (err, result) => {
   if (err) {
     res.status(501).send(err.message);
   }
   res.status(200).json(result);
 });
});

// CREATE CATEGORY

router.post("/create",async(req,res)=>{
    const newCategory = await conn.query("INSERT INTO categories SET ?",
    createCategoryQuery(
       req.body.categoryName,
      req.body.categoryImg,
      req.body.totalProducts,
    ),
    (err,result)=>{

       // console.log(req.body.categoryName, req.body.categoryImg , req.body.totalProducts);
      if(err)
      {
        res.status(400).json({"message": err.message});
      }
      else
      {
          res.status(201).send(`${req.body.categoryName} added successfully!`) 
      }
    })
  })

  //delete Category
  router.delete("/", async (req, res) => {
    await conn.query(
        "DELETE FROM categories WHERE categoryId = ?", req.body.categoryId,
        (err, result) => {
          if (err) {
            res.status(501).send(err.message);
          }
          res.status(202).json(result);
    });
  });

  // UPDATE CATEGORY
  router.patch("/",async(req,res)=>{
      await conn.query("UPDATE categories SET categoryName=? , categoryImg=?  WHERE categoryId=?",
      [req.body.categoryName, req.body.categoryImg ,req.body.categoryId],
      (err,result)=>{
          if(err)
          {
              res.status(501).send(err.message);
          }
          else{
              res.status(202).json(result);
          }
      })
  })
  module.exports = router;