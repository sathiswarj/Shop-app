import React from 'react'
import shopLogo from './images/shop-logo.png'
import './Footer.css'

const Footer = () => {
    return (
        <div className='footer'>
            <div className='container'>
                <div className="row">
                    <div className='footer-col-1'>
                        <h1>Download our app</h1>
                        <p>Download app for android and ios mobile phone</p>
                    </div>
                    <div className='footer-col-2'>
                        <img src={shopLogo} alt="homepage" />
                        <p>Download app for android and ios mobile phone</p>
                    </div>
                    <div className='footer-col-3'>
                        <h1>Links</h1>
                        <ul>
                               <li>Coupons</li>
                               <li>Blog post</li>
                               <li>Return policy</li>
                               <li>Join affiliate</li>
                        </ul>
                    </div>
                    <div className='footer-col-4'>
                        <h1>Follow us</h1>
                        <ul>
                               <li>Facebook</li>
                               <li>Instagram</li>
                               <li>Twitter</li>
                               <li>Youtube</li>
                        </ul>
                    </div>
                </div>
                <hr />
                <p className='copyright'>Copyright 2023 - Sathis</p>
            </div>
        </div>
    )
}

export default Footer