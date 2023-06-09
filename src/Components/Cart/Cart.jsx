import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import "./Cart.css"

const Cart = ({ cart, handleClearCart, children }) => {
    // const cart = props.cart   /* option - 1 */
    // const {cart} = props   /* option - 2 */

    // console.log(cart)

    let totalPrice = 0;
    let totalShipping = 0;
    let totalQuantity = 0;
    for (const product of cart) {
        // if(product.quantity === 0){
        //     product.quantity = 1;
        // }
        // product.quantity = product.quantity || 1;

        totalPrice = totalPrice + product.price * product.quantity;
        totalShipping = totalShipping + product.shipping;
        totalQuantity = totalQuantity + product.quantity;
    }

    const tax = totalPrice * 7 / 100;

    const granTotal = totalPrice + totalShipping + tax;

    return (
        <div className='cart'>
            <h5>Order Summary</h5>
            <p>Selected Item: {totalQuantity}</p>
            <p>Total Price: ${totalPrice}</p>
            <p>Total Shipping Charge: ${totalShipping}</p>
            <p>Tax: ${tax.toFixed(2)}</p>
            <h6>Grand Total: ${granTotal.toFixed(2)}</h6>
            <button onClick={handleClearCart} className='btn-clear-cart'>
                <span>Clear Cart</span>
                <FontAwesomeIcon icon={faTrashAlt} />
            </button>
            {children}
        </div>
    );
};

export default Cart;