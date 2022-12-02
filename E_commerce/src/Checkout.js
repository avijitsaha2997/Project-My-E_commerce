import React from "react";
import "./Checkout.css";
import CheckoutProduct from "./CheckoutProduct";
import { useStateValue } from "./StateProvider";
import Subtotal from "./Subtotal";

function Checkout() {
  // eslint-disable-next-line no-unused-vars
  const [{ basket }, dispatch] = useStateValue();
  return (
        <div className="checkout">
            <div className="checkout__left">

                <div className="checkout__title">
                    <h2>
                      Your shopping Cart...
                    </h2>
                    {basket.map(item => (
                        <CheckoutProduct
                        key={Math.random()}
                        id={item.id}
                        title={item.title}
                        image={item.image}
                        price={item.price}
                        rating={item.rating}
                        />
                    ))}

                </div>
            </div>
            <div className="checkout__right">
                <Subtotal/>
            </div>
        </div>
  );
}

export default Checkout;
