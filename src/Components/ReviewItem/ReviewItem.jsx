import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import "./ReviewItem.css"

const ReviewItem = ({ product, handelRemoveFromCart }) => {
    const { id, price, img, name, quantity } = product;

    return (
        <div className='review-item'>
            <img src={img} alt="" />
            <div className='review-details'>
                <p className='product-title'>{name}</p>
                <p>Price: <span className='orenge-text'>${price}</span></p>
                <p>Order Quantity: <span className='orenge-text'>{quantity}</span></p>
            </div>
            <button onClick={() => handelRemoveFromCart(id)} className='btn-delete'><FontAwesomeIcon className='delete-icon' icon={faTrashAlt} /></button>
        </div>
    );
};

export default ReviewItem;