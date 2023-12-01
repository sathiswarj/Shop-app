import React, { useContext } from 'react'
import { ShopContext } from './shop-context';
import { BiSolidOffer } from 'react-icons/bi'
const ProductOne = (props) => {
  const { id, title, description, price, discountPercentage, images,thumbnail } = props.data;
  const { addToCart, cartItems } = useContext(ShopContext)
  const cartItemAmount = cartItems[id]
  return (
    <div className='col-4'>
      <div className="card">
        <img src={images[0]} className="card-img" height="200px" alt="" />

        <h4>{title}</h4>
        <div class="rating">
          <i class="fa fa-star"></i>
          <i class="fa fa-star"></i>
          <i class="fa fa-star"></i>
          <i class="fa fa-star"></i>
          <i class="fa fa-star-o"></i>

        </div>
        <div className='description'>
          <p>{description}</p>
        </div>
        <p className="price-contain"><b>Price :  ${price}. 00</b></p>
        <p className="price-contain"><b> {discountPercentage} <BiSolidOffer className="offer-icon" /> offer !!</b></p>
        <div className="addCart">
          <button className="addToCartBtn" onClick={() => addToCart(id)}>Add to cart  {cartItemAmount > 0 && <> - {cartItemAmount}</>}</button>

        </div>
      </div>

    </div>
  )
}

export default ProductOne