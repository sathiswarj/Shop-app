import React from 'react'
import './Navbar.css'
import shirt from './images/product-2.jpg'
import shoe from './images/product-3.jpg'
import pant from './images/product-8.jpg'
import homepage from './images/homepage.png'
import { Link } from 'react-router-dom'
import { FaTag } from "react-icons/fa";
import { MdOutlineShoppingBag } from "react-icons/md";

function Home () {
    return (
        <div>
            <div className='row'>
                <div className='col-2'>
                    <h1>Give your workout <br /> a new style</h1>
                    <p className='homepage-container'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempora, voluptatem. <br /> illum dolore!
                        Necessitatibus molestiae aliquam in! Id
                        dignissimos laborum ea omnis!</p>
                    <a href="" className="explore-btn">Explore now</a>
                </div>
                <div className="col-2 ">
                    <div className='home-img'>
                        <img src={homepage} alt="img" className='homepage' />

                    </div>
                </div>
                <div className="product-tag-container">
                    <h2 className="products-container">PRODUCT TAGS <FaTag className="product-tag"/></h2>

                    <div className="col-2-tags">
                        <p className='col2-tag'>Shirts</p>
                        <p className='col2-tag'>Pants</p>
                        <p className='col2-tag'>T-shirts</p>
                        <p className='col2-tag'>Watch</p>
                        <br />
                        <p className='col2-tag'>Perfume</p>
                        <p className='col2-tag'>Mobiles & Laptops</p>
                        <p className='col2-tag'>Cosmetics</p>

                    </div>
                </div>
            </div>
            <div className='categories'>
                <h2 className="products-container">PRODUCTS <MdOutlineShoppingBag  className="product-tag"/></h2>
                <div className='small-container'>
                    <div className='row'>
                        <div className='col-3'>
                            <img src={shirt} alt="" className='homepage-img' />
                        </div>
                        <div className='col-3'>
                            <img src={shoe} alt="" className='homepage-img' />
                        </div>
                        <div className='col-3'>
                            <img src={pant} alt="" className='homepage-img' />
                        </div>
                    </div>
                </div>
            </div>
            <div className="Product-btn-container">
                <Link to="/Product" className="button"><span> See products </span></Link>
            </div>
        </div>
    )
}

export default Home