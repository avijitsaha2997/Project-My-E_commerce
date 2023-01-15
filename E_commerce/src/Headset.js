import React from "react";

import Product from "./Product";

function Headset() {
  return (
    <div className="home">
      <div className="home__container">

        <img
          className="home__image"
          src="https://wallpapercave.com/wp/wp7100388.jpg"
          alt=""
        />

        <div className="home__row">
          <Product
            id="8749"
            title="Marshall M-ACCS-00152"
            price={29.99}
            image="https://images-na.ssl-images-amazon.com/images/I/71mTfSKhhTL._AC_UL600_SR600,600_.jpg"
            rating={2}
          />
          <Product
            id="4558"
            title="Fantech MH83 Omni RGB Gaming Headphone"
            price={29.99}
            image="https://www.startech.com.bd/image/cache/catalog/headphone/fantech/mh83-omni/mh83-omni-1-500x500.jpg"
            rating={2}
          />
        </div>

        <div className="home__row">
          <Product
            id="9035"
            title="Boat Immortal 1000D"
            price={1099.99}
            image="https://cdn.shopify.com/s/files/1/0057/8938/4802/products/2_f3aa2756-01f3-4e39-80bc-7b4f6551c7aa_600x.png?v=1625748159"
            rating={2}
          />
          <Product
            id="1056"
            title="Boat Immortal 1300 Wireless"
            price={799.99}
            image="https://cdn.shopify.com/s/files/1/0057/8938/4802/products/IM1300_main_1_600x.png?v=1632715016"
            rating={2}
          />
          <Product
            id="6582"
            title="JBL Quantum 800 - Wireless Over-Ear Performance Gaming"
            price={59.99}
            image="https://m.media-amazon.com/images/W/WEBP_402378-T1/images/I/712zz31jpaL._AC_SL1500_.jpg"
            rating={2}
          />
        </div>

        <div className="home__row">
          <Product
            id="3958"
            title="HAVIT GAMENOTE HV-H2232D E-SPORTS RGB"
            price={1299.99}
            image="https://havitgamenote.com/wp-content/uploads/2020/11/h2232d-rgb-gaming-headset__07862.1558418642.jpg"
            rating={5}
          />
        </div>

      </div>
    </div>
  );
}

export default Headset;
