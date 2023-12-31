import React, { useState } from "react";
import "./cart.css";
import CheckoutModal from "./checkoutModal";
import { useCart } from "../context/cart";
import Cookies from "js-cookie";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Cart() {
  const [checkoutModal, setCheckoutModal] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
  // console.log(selectedItem)

  const OpenModal = (item) => {
    setSelectedItem(item);
    setCheckoutModal(true);
  };

  const CloseModal = () => {
    setCheckoutModal(false);
  };

  const { cart, removeFromCart, clearCart } = useCart();

  const token = Cookies.get("userToken");
  // console.log(token)

  const isAuthenticated = Cookies.get("userToken") ? true : false;
  // console.log(isAuthenticated)

  const handleProceedToCheckout = (item) => {
    if (isAuthenticated) {
      OpenModal(item);
    } else {
      toast.error("Login to proceed to checkout");
    }
  };

  const LogDetails = JSON.parse(sessionStorage.getItem("UserLoginDetails"));

  let id;
  if (LogDetails) {
    id = LogDetails.id;
  }

  // console.log(id)

  return (
    <>
      <section className="cart">
        {cart.length === 0 ? (
          <p className="alert-cart">There are no items in your cart</p>
        ) : (
          cart.map((items) => (
            <div className="cart-container">
              <div className="cart-inner">
                <div className="cart-image-container" key={items._id}>
                  <img
                    src={items.image}
                    className="cart-image"
                    alt="cart-image"
                  />
                </div>
              </div>

              <div className="cart-details-right">
                <div className="cart-container-details">
                  <p className="item-name-cart">
                    Product Name:
                    <span className="product-details">{items.name}</span>
                  </p>
                  <p className="item-price-cart">
                    Product Price:{" "}
                    <span className="product-details">Ksh.{items.price}</span>
                  </p>
                  <p className="item-count-cart">
                    Product Count:
                    <span className="product-details">{items.quantity}</span>
                  </p>
                  <div className="button-cart">
                    <button
                      className="item-btn-cart"
                      onClick={() => handleProceedToCheckout(items)}
                    >
                      Proceed to Checkout
                    </button>
                    <button
                      className="item-btn-cart-remove"
                      onClick={() => removeFromCart(items._id)}
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

      <CheckoutModal
        isOpen={checkoutModal}
        onClose={CloseModal}
        selectedItem={selectedItem}
        token={token}
        userId={id}
      />
    </>
  );
}

export default Cart;
