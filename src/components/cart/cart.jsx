import React, { useState } from "react";
import "./cart.css";
import pic1 from "../../images/kitchen-1.jpg";
import CheckoutModal from "./checkoutModal";

function Cart() {
  const [checkoutModal, setCheckoutModal] = useState(false);

  const OpenModal = (user) => {
    setCheckoutModal(true);
  };

  const CloseModal = () => {
    setCheckoutModal(false);
  };
  return (
    <>
      <section className="cart">
        <div className="cart-container">
          <div className="cart-inner">
            <div className="cart-image-container">
              <img src={pic1} className="cart-image" alt="cart-image" />
            </div>
          </div>

          <div className="cart-details-right">
            <div className="cart-container-details">
              <p className="item-name-cart">Gold Spoons</p>
              <p className="item-price-cart">Ksh.1200</p>
              <p className="item-count-cart">20 remaining</p>
              <div className="button-cart">
                <button className="item-btn-cart" onClick={OpenModal}>
                  Proceed to Checkout
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CheckoutModal isOpen={checkoutModal} onClose={CloseModal} />
    </>
  );
}

export default Cart;
