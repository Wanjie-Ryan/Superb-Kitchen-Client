import React from "react";
import "./home.css";
import { BsFillCartPlusFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import { useCart } from "../context/cart";
function Home() {
  const { addToCart,cartClicked } = useCart();

  const imageData = [
    {
      id: 1,
      pic: require("../../images/kitchen-1.jpg"),
      name: "Golden Spoons",
      price: "ksh.1200",
      quantity: "20 remaining",
      button: "Add To cart",
    },
    {
      id: 2,
      pic: require("../../images/kitchen-2.jpg"),
      name: "Brown Spoons",
      price: "ksh.1200",
      quantity: "20 remaining",
      button: "Add To cart",
    },
    {
      id: 3,
      pic: require("../../images/kitchen-3.jpg"),
      name: "Gold Spoons",
      price: "ksh.1200",
      quantity: "20 remaining",
      button: "Add To cart",
    },
    {
      id: 4,
      pic: require("../../images/kitchen-4.jpg"),
      name: "Gold Spoons",
      price: "ksh.1200",
      quantity: "20 remaining",
      button: "Add To cart",
    },
    {
      id: 5,
      pic: require("../../images/kitchen-5.jpg"),
      name: "Gold Spoons",
      price: "ksh.1200",
      quantity: "20 remaining",
      button: "Add To cart",
    },
    {
      id: 6,
      pic: require("../../images/kitchen-5.jpg"),
      name: "Gold Spoons",
      price: "ksh.1200",
      quantity: "20 remaining",
      button: "Add To cart",
    },
  ];

  return (
    <>
      <section className="home">
        <div className="home-inner">
          {imageData.map((items) => (
            <div className="kitchen-items">
              <div className="kitchen-details" key={items.id}>
                <div className="img-container">
                  <img src={items.pic} alt="image" className="product-image" />
                </div>

                <div className="img-desc">
                  <p className="item-name">{items.name}</p>
                  <p className="item-price">{items.price}</p>
                  <p className="item-count">{items.quantity}</p>
                  <button
                    className="item-btn"
                    onClick={() => {
                      addToCart(items);
                    }}
                  >
                    {/* <Link to="/cart" className="cart-link"> */}
                    <BsFillCartPlusFill className="cart-icon" />
                    {items.button}
                    {/* </Link> */}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}

export default Home;
