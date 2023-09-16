import React from "react";
import "./cart.css";
import pic1 from "../../images/kitchen-1.jpg";

function Cart() {
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
                    <button className="item-btn-cart">
                    
                    Proceed to Checkout
                
                </button>
                </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Cart;
