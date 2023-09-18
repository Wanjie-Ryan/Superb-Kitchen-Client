import React, { useState } from "react";
import "./cart.css";
import pic1 from "../../images/kitchen-1.jpg";
import CheckoutModal from "./checkoutModal";
import {useCart} from '../context/cart'
function Cart() {
  const [checkoutModal, setCheckoutModal] = useState(false);

  const OpenModal = (user) => {
    setCheckoutModal(true);
  };

  const CloseModal = () => {
    setCheckoutModal(false);
  };

  const {cart} = useCart()
  return (
    <>
      <section className="cart">
        {cart.map((items)=>(

            <div className="cart-container">
          <div className="cart-inner">
            <div className="cart-image-container" key={items.id}>
              <img src={items.pic} className="cart-image" alt="cart-image" />
            </div>
          </div>

          <div className="cart-details-right">
            <div className="cart-container-details">
              <p className="item-name-cart">{items.name}</p>
              <p className="item-price-cart">{items.price}</p>
              <p className="item-count-cart">{items.quantity}</p>
              <div className="button-cart">
                <button className="item-btn-cart" onClick={OpenModal}>
                  Proceed to Checkout
                </button>
              </div>
            </div>
          </div>
        </div>
                ))
}
      </section>

      <CheckoutModal isOpen={checkoutModal} onClose={CloseModal} />
    </>
  );
}

export default Cart;
