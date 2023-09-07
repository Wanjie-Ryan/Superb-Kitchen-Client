import React from 'react'
import './home.css'
import pic1 from '../../images/kitchen-1.jpg'
import pic2 from '../../images/kitchen-2.jpg'
import pic3 from '../../images/kitchen-3.jpg'
import pic4 from '../../images/kitchen-4.jpg'
import pic5 from '../../images/kitchen-5.jpg'
import {BsFillCartPlusFill} from 'react-icons/bs'

function Home(){

    return(
        <>

           <section className='home'>

            <div className='home-inner'>

                <div className='kitchen-items'>

                    <div className='kitchen-details'>


                        <div className='img-container'>
                            <img src={pic1} alt='image' className='product-image'/>
                        </div>

                        <div className='img-desc'>
                            <p className='item-name'>Gold Spoons</p>
                            <p className='item-price'>Ksh.1200</p>
                            <p className='item-count'>20 remaining</p>
                            <button className='item-btn'><BsFillCartPlusFill/>Add To cart</button>

                        </div>
                    </div>


                </div>

                <div className='kitchen-items'>

                <div className='kitchen-details'>


                        <div className='img-container'>
                            <img src={pic1} alt='image' className='product-image'/>
                        </div>

                        <div className='img-desc'>
                            <p className='item-name'>Gold Spoons</p>
                            <p className='item-price'>Ksh.1200</p>
                            <p className='item-count'>20 remaining</p>
                            <button className='item-btn'><BsFillCartPlusFill/>Add To cart</button>

                        </div>
                    </div>


                </div>

                <div className='kitchen-items'>

                <div className='kitchen-details'>


                        <div className='img-container'>
                            <img src={pic2} alt='image' className='product-image'/>
                        </div>

                        <div className='img-desc'>
                            <p className='item-name'>Gold Spoons</p>
                            <p className='item-price'>Ksh.1200</p>
                            <p className='item-count'>20 remaining</p>
                            <button className='item-btn'><BsFillCartPlusFill/>Add To cart</button>

                        </div>
                    </div>

                </div>

                <div className='kitchen-items'>

                <div className='kitchen-details'>


                        <div className='img-container'>
                            <img src={pic3} alt='image' className='product-image'/>
                        </div>

                        <div className='img-desc'>
                            <p className='item-name'>Gold Spoons</p>
                            <p className='item-price'>Ksh.1200</p>
                            <p className='item-count'>20 remaining</p>
                            <button className='item-btn'><BsFillCartPlusFill/>Add To cart</button>

                        </div>
                    </div>


                </div>

                <div className='kitchen-items'>

                <div className='kitchen-details'>


                        <div className='img-container'>
                            <img src={pic4} alt='image' className='product-image'/>
                        </div>

                        <div className='img-desc'>
                            <p className='item-name'>Gold Spoons</p>
                            <p className='item-price'>Ksh.1200</p>
                            <p className='item-count'>20 remaining</p>
                            <button className='item-btn'><BsFillCartPlusFill/>Add To cart</button>

                        </div>
                    </div>


                </div>

                <div className='kitchen-items'>

                <div className='kitchen-details'>


                        <div className='img-container'>
                            <img src={pic5} alt='image' className='product-image'/>
                        </div>

                        <div className='img-desc'>
                            <p className='item-name'>Gold Spoons</p>
                            <p className='item-price'>Ksh.1200</p>
                            <p className='item-count'>20 remaining</p>
                            <button className='item-btn'><BsFillCartPlusFill/>Add To cart</button>

                        </div>
                    </div>
                </div>




            </div>






           </section>


        </>
    )
}


export default Home