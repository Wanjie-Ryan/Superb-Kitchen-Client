import React, {useState, useEffect} from "react";
import "./home.css";
import { BsFillCartPlusFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import { useCart } from "../context/cart";
import axios from 'axios'
import {  AiOutlineLoading3Quarters } from "react-icons/ai";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Home() {
  const { addToCart, cartClicked } = useCart();

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

  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(false)

  useEffect(()=>{

    const getUserProducts  = async()=>{

      try{

        setLoading(true)
        const response = await axios.get('http://localhost:3005/api/user/products/userproducts')
        // console.log(response.data.userProducts)
        setProducts(response.data.userProducts)
        setLoading(false)


      }

      catch(err){

        console.log(err)
        if(err.response.status === 500){
          toast.error('A problem with our servers, hang on')
        }
      }
      finally{
        setLoading(false)
      }



    }

    getUserProducts()



  },[])

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
