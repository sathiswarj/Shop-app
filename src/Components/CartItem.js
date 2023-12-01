import React, { useContext } from 'react'
// import './Carts.css'
import { ShopContext } from './shop-context';
export const CartItem = (props) => {
    const { id, title, discountPercentage, brand, price, thumbnail , images} = props.data;
    const { cartItems, addToCart, removeFromCart, updateCartCount } = useContext(ShopContext)

    return (
        <div className='small-container cart-page'>
            <table>
                <div className='head-title-1'>  <h2 >Your cart items</h2></div>
                <tr>
                    <th>Product</th>
                    <th>Quantity</th>
                    <th>Subtotal</th>
                </tr>
                <tr>
                    <td>
                        <div className='card-info'>
                            <img src={images[0]} alt="" height="200px" className="cart-image" />
                            <div className='product-details'>
                                <p>{title}</p>
                                <p className='price-contain'>Price : ${price}. 00</p> <br />
                                <p className='price-contain'><b>Offer :{discountPercentage} % !!! </b></p>
                            </div>
                        </div>

                    </td>

                    <td><input type='number' value={cartItems[id]} onChange={(e) => updateCartCount(Number(e.target.value), id)} /></td>
                    <td><small>${price}. 00</small></td>
                </tr>
            </table>
        </div>

    )
}

