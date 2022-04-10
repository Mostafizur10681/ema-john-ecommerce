import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import google from '../../images/google.png'

const SignUp = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [error, setError] = useState('')

    const handleEmailBlur = event => {
        setEmail(event.target.value)
    }
    const handlePasswordBlur = event => {
        setPassword(event.target.value)
    }
    const handleConfirmPasswordBlur = event => {
        setConfirmPassword(event.target.value)
    }
    const handlerCreateUser = event => {
        event.preventDefault();
        if (password !== confirmPassword) {
            setError('Your two password did not match')
        }
    }
    return (
        <div className='form-container'>
            <div>
                <h2 className='form-title'>Sign Up</h2>
                <form onSubmit={handlerCreateUser}>
                    <div className='input-group'>
                        <label htmlFor="email">Email</label>
                        <input onBlur={handleEmailBlur} type="email" name="email" id="" />
                    </div>
                    <div className='input-group'>
                        <label htmlFor="password">Password</label>
                        <input onBlur={handlePasswordBlur} type="password" name="password" id="" />
                    </div>
                    <div className='input-group'>
                        <label htmlFor="confirm-password">Confirm Password</label>
                        <input onBlur={handleConfirmPasswordBlur} type="password" name="Confirm-password" id="" />
                    </div>
                    <p style={{ color: 'red', }}>{error}</p>
                    <input className='form-button' type="submit" value="Login" />
                </form>
                <p className='newAccount'>
                    Already Have an Account? <Link to='/login'>Login</Link>
                </p>
                <div className='orContainer'>
                    <hr className='orLine' />
                    <p className='or'>or</p>
                    <hr className='orLine' />
                </div>
                <button className='googleSignIn' type="submit">
                    <img src={google} alt="" />
                    <p>Continue With Google</p>
                </button>
            </div>
        </div>
    );
};

export default SignUp;