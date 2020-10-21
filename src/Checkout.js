import React from "react";
import "./Checkout.css";
import CheckoutProduct from "./CheckoutProduct";
import { useStateValue } from "./StateProvider";
import Subtotal from "./Subtotal";

function Checkout() {
  const [{ cart }, dispatch] = useStateValue();
  return (
    <div className="checkout">
      <div className="checkout__left">
        <img
          className="checkout__ad"
          src="https://images-eu.ssl-images-amazon.com/images/G/31/img20/Events/jupiter20/WAVE1-GW/14-SWM_400x39._CB419141035_.jpg"
          alt=""
        />

        <div className="checkout__title">
          <h2>Your Shopping Cart</h2>
        </div>
        {cart.map((item) => (
          <CheckoutProduct
            id={item.id}
            title={item.title}
            rating={item.rating}
            price={item.price}
            image={item.image}
          />
        ))}
      </div>

      <div className="checkout__right">
        <Subtotal />
      </div>
    </div>
  );
}

export default Checkout;
