import React from 'react'
import './cart.css'
import pic1 from "../../images/kitchen-1.jpg";



function Cart(){

    return(

        <>

            <section className='cart'>

                <div className='cart-container'>



                <div className='cart-inner'>

                    <div className='cart-image-container'>
                    <img src={pic1} className='cart-image' alt='cart-image'/>
                    </div>



                </div>

                <div className='cart-details-right'>

                    <div className='cart-container-details'>
                    <p className="item-name">Gold Spoons</p>
                <p className="item-price">Ksh.1200</p>
                <p className="item-count">20 remaining</p>
                <button className="item-btn">
                  {/* <Link to="/cart" className="cart-link"> */}
                    {/* <BsFillCartPlusFill className="cart-icon" /> */}
                    Proceed to Checkout
                  {/* </Link> */}
                </button>

                    </div>


                </div>




                </div>
            </section>

        </>
    )
}

export default Cart