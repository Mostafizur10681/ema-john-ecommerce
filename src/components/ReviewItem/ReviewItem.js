import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons'
import React from 'react';
import './ReviewItem.css'

const ReviewItem = (props) => {
    const { product, handleRemoveProduct } = props
    const { name, img, price, shipping, quantity } = product
    return (
        <div className='review-item-container'>
            <div>
                <img src={img} alt="" />
            </div>
            <div className="review-item">
                <div className="review-item-details">
                    <h2 className='product-name' title={name}>{name.length > 20 ? name.slice(0, 20) + '...' : name}</h2>
                    <p>Price: <span className='orange-color'>${price}</span></p>
                    <p>Shipping: <small className='orange-color'>${shipping}</small></p>
                    <p>Quantity: <small className='orange-color'>{quantity}</small></p>
                </div>
                <div className='delete-button-container'>
                    <button onClick={() => handleRemoveProduct(product)} className='delete-button'>
                        <FontAwesomeIcon className='delete-icon' icon={faTrashAlt}></FontAwesomeIcon>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ReviewItem;