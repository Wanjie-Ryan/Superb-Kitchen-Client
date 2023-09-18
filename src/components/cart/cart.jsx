import React, { useState } from "react";
import "./cart.css";
import CheckoutModal from "./checkoutModal";
import { useCart } from "../context/cart";
function Cart() {
  const [checkoutModal, setCheckoutModal] = useState(false);

  const OpenModal = (user) => {
    setCheckoutModal(true);
  };

  const CloseModal = () => {
    setCheckoutModal(false);
  };

  const { cart, removeFromCart, clearCart } = useCart();
  return (
    <>
      <section className="cart">
        {cart.length === 0 ? (
          <p className="alert-cart">There are no items in your cart</p>
        ) : (
          cart.map((items) => (
            <div className="cart-container">
              <div className="cart-inner">
                <div className="cart-image-container" key={items.id}>
                  <img
                    src={items.pic}
                    className="cart-image"
                    alt="cart-image"
                  />
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
                    <button
                      className="item-btn-cart-remove"
                      onClick={() => removeFromCart(items.id)}
                    >
                      Remove Item
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))
        )}
        {/* <button className="clear-cart-btn" onClick={clearCart}>
          Clear Cart
        </button> */}
      </section>

      <CheckoutModal isOpen={checkoutModal} onClose={CloseModal} />
    </>
  );
}

export default Cart;
