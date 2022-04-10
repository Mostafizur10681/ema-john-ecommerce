import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Shipment = () => {
    const [email, setEmail] = useState('')
    const [name, setName] = useState('')
    const [address, setAddress] = useState('')
    const [phone, setPhone] = useState('')
    const [error, setError] = useState('')
    // const navigate = useNavigate()

    const handleNameBlur = event => {
        setName(event.target.value)
    }
    const handleEmailBlur = event => {
        setEmail(event.target.value)
    }
    const handleAddressBlur = event => {
        setAddress(event.target.value)
    }
    const handlePhoneBlur = event => {
        setPhone(event.target.value)
    }

    const handlerShipping = event => {
        event.preventDefault();
        const shipping = { name, email, phone, address };
        console.log(shipping)
    }
    return (
        <div className='form-container'>
            <div>
                <h2 className='form-title'>Shipping Information</h2>
                <form onSubmit={handlerShipping}>
                    <div className='input-group'>
                        <label htmlFor="text">Your Name</label>
                        <input onBlur={handleNameBlur} type="text" name="name" id="" required />
                    </div>
                    <div className='input-group'>
                        <label htmlFor="email">Your Email</label>
                        <input onBlur={handleEmailBlur} type="email" name="email" id="" required />
                    </div>
                    <div className='input-group'>
                        <label htmlFor="address">Address</label>
                        <input onBlur={handleAddressBlur} type="text" name="address" id="" required />
                    </div>
                    <div className='input-group'>
                        <label htmlFor="Phone-Number">Phone-Number</label>
                        <input onBlur={handlePhoneBlur} type="text" name="phone-number" id="" required />
                    </div>
                    <p style={{ color: 'red', }}>{error}</p>
                    <input className='form-button' type="submit" value="Add Shipping" />
                </form>

            </div>
        </div>
    );
};

export default Shipment;