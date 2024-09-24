import React, { useContext } from 'react';
import './CartItem.css';
import CancelIcon from '@mui/icons-material/Cancel';
import { ShopContext } from '../context/ShopContext';

function CartItems() {
    const { all_product, cartItems, removeFromCart,getTotalCartAmount } = useContext(ShopContext);

    return (
        <div className='cartitem'>
            <div className='cartitems-main'>
                <p>Products</p>
                <p>Title</p>
                <p>Price</p>
                <p>Quantity</p>
                <p>Total</p>
                <p>Remove</p>
            </div>
            <hr />
            {all_product.map((e) => {
                // Check if cartItems has a valid quantity for the product
                const quantity = cartItems[e.id];
                if (quantity > 0) {
                    return (
                        <div className='cartitem-format' key={e.id}>
                            <img src={e.image} alt={e.name} className='carticon-product-icon' />
                            <p>{e.name}</p>
                            <p>${e.new_price}</p>
                            <button className='cartItems-quantity'>{quantity}</button>
                            <p>${(e.new_price * quantity).toFixed(2)}</p>
                            <CancelIcon 
                                className='remove-icon' 
                                onClick={() => removeFromCart(e.id)} 
                            />
                        </div>
                    );
                }
                
                return null;
            })}
            <div className='cartitems-down'>
    <div className='cartitems-total'>
        <h1>Cart Totals</h1>

        <div className='cartitems-total-items'>
            <p>Subtotal</p>
            <p>${getTotalCartAmount()}</p>
        </div>
        <hr/>
        
        <div className='cartitems-total-items'>
            <p>Shipping fee</p>
            <p>Free</p>
        </div>
        <hr/>
        
        <div className='cartitems-total-items'>
            <h3>Total</h3>
            <p>${getTotalCartAmount()}</p>
        </div>
    </div>
    
    <button>PROCEED TO CHECKOUT</button>
</div>

<div className='cartitems-promocode'>
    <p>If you have a promo code, enter it here</p>
    
    <div className='cartitems-promobox'>
        <input type='text' placeholder='Promo code'/>
        <button>Submit</button>
    </div>
</div>

            </div>

    );
}

export default CartItems;
