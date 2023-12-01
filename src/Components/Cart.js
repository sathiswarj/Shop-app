import React, { useContext } from 'react'
import { Products } from "../Products";
import { ShopContext } from './shop-context';
import { CartItem } from './CartItem';
import { Link } from 'react-router-dom';
import './CartItem.css'
import Emptyicon from './images/empty-cart.png'
 
const Cart = () => {

  const { cartItems, getTotalAmount } = useContext(ShopContext)
  let totalAmount = getTotalAmount();

  const checkout = () =>{
    alert("Thank you purchasing !!");
  }

  return (
    <>
      <div className='small-container-1'>
        <div className="cart-row">
          {
            Products.map((product) => {
              if (cartItems[product.id] !== 0) {
                return <CartItem data={product} />
              }
            })
          }
        </div>
        {totalAmount ?
          <div className='checkout'>
            <table>
              <tr>
                <td>Total amount</td>
                <td>${totalAmount}.00</td>
              </tr>
              <tr className='btn'>
                <td><Link to="/product" className='shop-btn'> continue shopping </Link></td>
                <td><Link to="" className='shop-btn' onClick={checkout}> checkout </Link></td>
              </tr>
            </table>
          </div>
          :
          <div className='empty-cart'>
            <h1>Your cart is empty</h1>
            <img src={Emptyicon} height="300px" className="empty-cart-img " />
          </div>
        }

      </div>
    </>
  )
}

export default Cart