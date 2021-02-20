import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          src="https://images-eu.ssl-images-amazon.com/images/G/31/img20/Events/jupiter20/WAVE1-GW/6_DesktopHero_Unrec_3000x1200-aa._CB419164846_.jpg"
          alt=""
        />

        <div className="home__row">
        </div>
        <div className="home__row">
          <Product
            title="samsumg mobile phone"
            price={499}
            rating={5}
            image="https://images-na.ssl-images-amazon.com/images/I/71OxJeyywSL._SY879_.jpg"
          />
          <Product
            title="samsumg mobile phone"
            price={499}
            rating={5}
            image="https://images-na.ssl-images-amazon.com/images/I/71OxJeyywSL._SY879_.jpg"
          />
          <Product
            title="samsumg mobile phone"
            price={499}
            rating={5}
            image="https://images-na.ssl-images-amazon.com/images/I/71OxJeyywSL._SY879_.jpg"
          />
        </div>
        <div className="home__row">
      </div>
    </div>
  );
}

export default Home;
