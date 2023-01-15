import React from "react";
import "./Home.css";
import Product from "./Product";

function Computer() {
  return (
    <div className="home">
      <div className="home__container">

        <img
          className="home__image"
          src="https://wallpapers.com/images/featured/murjp1nk4lp1idlt.jpg"
          alt=""
        />

        <div className="home__row">
          <Product
            id="749"
            title="Macbook Pro 14-inch"
            price={29.99}
            image="https://www.apple.com/v/macbook-pro-14-and-16/c/images/overview/hero/hero_intro_endframe__e6khcva4hkeq_large.jpg"
            rating={3}
          />
          <Product
            id="758"
            title="Acer Nitro 7"
            price={29.99}
            image="https://www.notebookcheck.net/fileadmin/_processed_/e/a/csm_Nitro_7_AN715_51_05_f69b63ef61.jpg"
            rating={4}
          />
        </div>

        <div className="home__row">
          <Product
            id="235"
            title="ASUS TUF A17 2020 Version 17.3-inch FHD Gaming Laptop."
            price={1099.99}
            image="https://asusrog.com.bd/wp-content/uploads/2020/06/3-1-1.jpg"
            rating={4}
          />
          <Product
            id="456"
            title="Lenevo Legion 5"
            price={799.99}
            image="https://www.lenovo.com/medias/lenovo-laptop-legion-5-15-amd-series-thumbnail.png?context=bWFzdGVyfHJvb3R8ODI2NzR8aW1hZ2UvcG5nfGhmMi9oMzYvMTQxOTA0NjcxNTM5NTAucG5nfGE0NTE3OGE0M2NmODg2YWU2M2E3MzRkMjY2Nzc0OWZmMzQ3MDhmMDkxZGJiNjc5YjNkYmUxYmExYmFhNTBkN2Y"
            rating={4}
          />
          <Product
            id="782"
            title="Acer Nitro 5"
            price={59.99}
            image="https://www.notebookcheck.net/fileadmin/Notebooks/News/_nc3/Acer_Nitro_5_actual_actual_header.jpg"
            rating={4}
          />
        </div>

        <div className="home__row">
          <Product
            id="458"
            title="SAMSUNG 49” Odyssey G9 Gaming Monitor, 1000R Curved Screen."
            price={1299.99}
            image="https://m.media-amazon.com/images/I/61SQz8S+fEL._AC_SL1000_.jpg"
            rating={5}
          />
        </div>

      </div>
    </div>
  );
}

export default Computer;
