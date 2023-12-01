import React from 'react'
import { Products } from '../Products'
import ProductOne from './ProductOne'
import './Product.css'
import OfferImg from './images/offer-img.jpeg'

const Product = () => {
  return (
    <>
      <div className="banner-img">
        <img src={OfferImg} className='offer-img' />
      </div>
      <div className='small-container'>

        <h2 className='head-title'>Featured Products</h2>
        <div className="row">
          {
            Products.map((product) => (
              <ProductOne data={product} />
            ))
          }
        </div>
      </div>
    </>
  )
}

export default Product


