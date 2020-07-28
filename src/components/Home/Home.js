import React from "react";
import styles from "./Home.module.css";
import { Grid } from "@material-ui/core";
import { Search } from "@material-ui/icons";
import ArrowDownwardIcon from "@material-ui/icons/ArrowDownward";
import { HorizontalSlider, Product } from "../../components";
import image1 from "../../assets/images/image1.png";
import image2 from "../../assets/images/image2.png";
import image3 from "../../assets/images/image3.png";
import image4 from "../../assets/images/image4.png";
import green from "../../assets/images/green.jpg";

export const Home = () => {
  const images = [image1, image2, image3, image4];

  const scrollDown = () => {
    let a = document.createElement("a");
    a.href = "#slider";
    a.click();
  };

  const products = [
    {
      name: "Lime",
      price: "10",
      category: "Food",
      imgSrc: green,
    },
    {
      name: "Rin",
      price: "485",
      category: "Household",
      imgSrc:
        "https://images-na.ssl-images-amazon.com/images/I/61we91ORBPL._SL1000_.jpg",
    },
    {
      name: "Lime",
      price: "10",
      category: "Food",
      imgSrc: green,
    },
    {
      name: "Lime",
      price: "10",
      category: "Food",
      imgSrc: green,
    },
    {
      name: "Lime",
      price: "10",
      category: "Food",
      imgSrc: green,
    },
    {
      name: "Lime",
      price: "10",
      category: "Food",
      imgSrc: green,
    },
  ];

  return (
    <>
      <div className={styles.container}>
        <div className={styles.heading}>
          <h1>Hey, we review Kirana Products</h1>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
        </div>
        <div className={styles.search}>
          <div className={styles.title}>
            <h4>Grocery</h4>
          </div>
          <div className={styles.input}>
            <input type="text" placeholder="Searh your products from here" />
          </div>
          <div className={styles.btn}>
            <button>
              <Search /> Search
            </button>
          </div>
        </div>
        <div className={styles.scrollIcon}>
          {/* <i className="fas fa-mouse-alt" /> */}
          <ArrowDownwardIcon onClick={scrollDown} />
        </div>
      </div>
      <section className={styles.sliderSection}>
        <div className={styles.slider} id="slider">
          <HorizontalSlider />
        </div>
      </section>
      <section className={styles.products}>
        <div className={styles.productContainer}>
          <Grid container spacing={4}>
            {products.map((product) => {
              return (
                <Grid item md={4} lg={3} xs={12} sm={6}>
                  <Product product={product} />
                </Grid>
              );
            })}
          </Grid>
        </div>
      </section>
    </>
  );
};
export default Home;
