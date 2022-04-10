import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import useProducts from '../../hook/useProducts';
import { addToDb } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css'

const Shop = () => {
    const [products, setProducts] = useProducts()

    const [cart, setCart] = useState([])

    const handleAddToCart = (product) => {
        const newCart = [...cart, product]
        setCart(newCart);
        addToDb(product.id)
    }



    return (
        <div className='shopping-container'>
            <div className="products-container">
                {
                    products.map(product => <Product
                        key={product.id}
                        product={product}
                        handleAddToCart={handleAddToCart}
                    ></Product>)
                }
            </div>
            <div className="summary-container">
                <Cart cart={cart}>
                    <Link to="/orders">
                        <button className='review-oreder-button'>Review Order</button>
                    </Link>
                </Cart>
            </div>
        </div>
    );
};

export default Shop;