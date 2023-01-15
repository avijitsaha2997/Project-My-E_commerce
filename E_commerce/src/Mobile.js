import React from "react";
import "./Home.css";
import Product from "./Product";
function Mobile() {
  return (
    <div className="home">
      <div className="home__container">

        <img
          className="home__image"
          src="https://static.vecteezy.com/system/resources/thumbnails/005/279/973/original/mobile-phone-with-blank-green-screen-front-view-isolated-on-white-background-4k-animation-for-presentation-on-mockup-screen-free-video.jpg"
          alt=""
        />

        <div className="home__row">
          <Product
            id="872"
            title="Samsung s22 ultra"
            price={29.99}
            image="http://cdn.shopify.com/s/files/1/0550/5807/1748/products/01b10f96-feb1-446a-bbda-5d0e30720781.png?v=1645523214"
            rating={3}
          />
          <Product
            id="459"
            title="Samsung s20 ultra"
            price={29.99}
            image="https://www.dimprice.co.uk/image/cache/catalog/Samsung/Samsung-S20-FE-Blue-1-1200x1200.png"
            rating={4}
          />
        </div>

        <div className="home__row">
          <Product
            id="905"
            title="Vivo y21"
            price={1099.99}
            image="https://asia-exstatic-vivofs.vivo.com/PSee2l50xoirPK7y/1631619780956/14216934e420bdd878aba928a02adb61.png"
            rating={4}
          />
          <Product
            id="103"
            title="i phone 14 pro max. The best mobile phone in apple history."
            price={799.99}
            image="https://www.pngall.com/wp-content/uploads/13/iPhone-14-PNG-Pic.png"
            rating={4}
          />
          <Product
            id="657"
            title="Xiaomi Redmi Note 10"
            price={59.99}
            image="https://www.shopz.com.bd/wp-content/uploads/2021/10/Xiaomi-Redmi-Note-10.jpg"
            rating={4}
          />
        </div>

        <div className="home__row">
          <Product
            id="396"
            title="Xiaomi Mi Note 10"
            price={1299.99}
            image="https://fdn2.gsmarena.com/vv/pics/xiaomi/xiaomi-mi-cc9-pro-1.jpg"
            rating={5}
          />
        </div>

      </div>
    </div>
  );
}

export default Mobile;
