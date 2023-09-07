import React from 'react'
import './home.css'
import pic1 from '../../images/kitchen-1.jpg'
import pic2 from '../../images/kitchen-2.jpg'
import {BsFillCartPlusFill} from 'react-icons/bs'

function Home(){

    return(
        <>

           <section className='home'>

            <div className='home-inner'>

                <div className='kitchen-items'>

                    <div className='img-container'>
                        <img src={pic1} alt='image' className='product-image'/>
                    </div>

                    <div className='img-desc'>
                        <p>Gold Spoons</p>
                        <p>Ksh.1200</p>
                        <p>20 remaining</p>
                        <button><BsFillCartPlusFill/>Add To cart</button>

                    </div>


                </div>

                <div className='kitchen-items'>

                <div className='img-container'>
                        <img src={pic1} alt='image' className='product-image'/>
                    </div>

                    <div className='img-desc'>
                        <p>Gold Spoons</p>
                        <p>Ksh.1200</p>
                        <p>20 remaining</p>
                        <button><BsFillCartPlusFill/>Add To cart</button>

                    </div>


                </div>

                <div className='kitchen-items'>

                <div className='img-container'>
                        <img src={pic1} alt='image' className='product-image'/>
                    </div>

                    <div className='img-desc'>
                        <p>Gold Spoons</p>
                        <p>Ksh.1200</p>
                        <p>20 remaining</p>
                        <button><BsFillCartPlusFill/>Add To cart</button>

                    </div>

                </div>

                <div className='kitchen-items'>

                <div className='img-container'>
                        <img src={pic1} alt='image' className='product-image'/>
                    </div>

                    <div className='img-desc'>
                        <p>Gold Spoons</p>
                        <p>Ksh.1200</p>
                        <p>20 remaining</p>
                        <button><BsFillCartPlusFill/>Add To cart</button>

                    </div>


                </div>

                <div className='kitchen-items'>

                <div className='img-container'>
                        <img src={pic1} alt='image' className='product-image'/>
                    </div>

                    <div className='img-desc'>
                        <p>Gold Spoons</p>
                        <p>Ksh.1200</p>
                        <p>20 remaining</p>
                        <button><BsFillCartPlusFill/>Add To cart</button>

                    </div>


                </div>

                <div className='kitchen-items'>

                <div className='img-container'>
                        <img src={pic1} alt='image' className='product-image'/>
                    </div>

                    <div className='img-desc'>
                        <p>Gold Spoons</p>
                        <p>Ksh.1200</p>
                        <p>20 remaining</p>
                        <button><BsFillCartPlusFill/>Add To cart</button>

                    </div>

                </div>




            </div>






           </section>


        </>
    )
}


export default Home