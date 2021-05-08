import React from "react";
import "./home.css";
import Product from "./Product";
function Home() {
  return (
    <div className="home">
      <div className="home__container">
        {/* <img
          className="home__image"
          src="https://images-na.ssl-images-amazon.com/images/G/01/kindle/merch/2019/4852331/Gateway-TallHero-1500x600._CB413504635_.jpg"
          alt=""
        /> */}
        <div className="home__row">
          <Product
            id="1"
            image="https://m.media-amazon.com/images/I/914W+OtJQ-L._AC_UY327_FMwebp_QL65_.jpg"
            title="Sceptre Curved 27 75Hz LED Monitor HDMI VGA Build-In Speakers, EDGE-LESS Metal Black 2019 (C275W-1920RN)"
            price={55779}
            rating={5}
          />
        </div>
        <div className="home__row">
          <Product
            id="2"
            image="https://images-na.ssl-images-amazon.com/images/I/413DcxIjkOL.jpg"
            title="HP 63 | Ink Cartridge | Black | F6U62AN"
            price={719}
            rating={4}
          />
          <Product
            id="3"
            image="https://images-na.ssl-images-amazon.com/images/I/5128CQGJXkL._AC_SX184_.jpg"
            title="8 Weeks to SEALFIT "
            price={956}
            rating={4}
          />
        </div>
        <div className="home__row">
          <Product
            id="4"
            image="data:image/webp;base64,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"
            title="OnePlus 7T HD1907, 128GB GSM 4G LTE "
            price={52999}
            rating={4}
          />
          <Product
            id="9"
            title="LG 6.0 Kg 5 Star Inverter Fully-Automatic Front Loading Washing Machine (FHM1006ADW, White, Direct Drive Technology)"
            image="https://m.media-amazon.com/images/I/81KDKQkSXFL._AC_UY327_FMwebp_QL65_.jpg"
            price={23990}
            rating={5}
          />
          <Product
            id="6"
            image="https://m.media-amazon.com/images/I/61IZrofTaDL._AC_UL480_FMwebp_QL65_.jpg"
            title="Rolex Yacht-Master Ii 44mm Rose Gold and Steel Watch 116681"
            price={23995}
            rating={5}
          />
        </div>
        <div className="home__row">
          <Product
            id="7"
            image="https://m.media-amazon.com/images/I/31NJ8yrcbPL._AC_SY200_.jpg"
            title="SanDisk Cruzer Blade 32GB USB Flash Drive"
            price={399}
            rating={4}
          />
          <Product
            id="8"
            title="boAt Airdopes 121v2 TWS Earbuds with Bluetooth V5.0"
            image="https://m.media-amazon.com/images/I/71ByNT34bfL._AC_UY327_FMwebp_QL65_.jpg"
            price={1299}
            rating={3}
          />
          <Product
            id="5"
            image="https://m.media-amazon.com/images/I/61b+pD1iRRL._AC_UL480_FMwebp_QL65_.jpg"
            title="Crocs Classic Lined Warm Clog unisex Fuzzy adult Slippers Shoes"
            price={799}
            rating={4}
          />

          <Product
            id="10"
            image="https://images-eu.ssl-images-amazon.com/images/I/41je5HousVL._AC_SX184_.jpg"
            title="AmazonBasics Mechanics Socket Set (Pack of 40)"
            price={1569}
            rating={4}
          />
          <Product
            id="11"
            image="https://images-eu.ssl-images-amazon.com/images/I/31Io-+h-B1L._AC_SX184_.jpg"
            title="Happer Premium Foldable Step Ladder, Clamber, 3 Steps (Black & Orange)"
            price={1899}
            rating={5}
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
