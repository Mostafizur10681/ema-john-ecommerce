import React from 'react';
import { Link } from 'react-router-dom';
import useCart from '../../hook/useCart';
import useProducts from '../../hook/useProducts';
import { removeFromDb } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import ReviewItem from '../ReviewItem/ReviewItem';

const Orders = () => {
    const [products, setProducts] = useProducts()
    const [cart, setCart] = useCart(products)

    const handleRemoveProduct = product => {
        // console.log(product)
        const rest = cart.filter(pd => pd.id !== product.id)
        setCart(rest)
        removeFromDb(product.id)
    }
    return (
        <div className='shopping-container'>
            <div className="review-container">
                {
                    cart.map(product => <ReviewItem
                        key={product.id}
                        product={product}
                        handleRemoveProduct={handleRemoveProduct}
                    ></ReviewItem>)
                }
            </div>
            <div className="summary-container">
                <Cart cart={cart}>
                    <Link to='/inventory'>
                        <button className='review-oreder-button'>Proced Checkout</button>
                    </Link>
                </Cart>
            </div>
        </div>
    );
};

export default Orders;
