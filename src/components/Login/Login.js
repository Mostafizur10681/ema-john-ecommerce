import React from 'react';
import { Link } from 'react-router-dom';
import './Login.css'
import google from '../../images/google.png'

const Login = () => {
    return (
        <div className='form-container'>
            <div>
                <h2 className='form-title'>Login</h2>
                <form action="">
                    <div className='input-group'>
                        <label htmlFor="email">Email</label>
                        <input type="email" name="email" id="" />
                    </div>
                    <div className='input-group'>
                        <label htmlFor="password">Password</label>
                        <input type="password" name="password" id="" />
                    </div>
                    <input className='form-button' type="submit" value="Login" />
                </form>
                <p className='newAccount'>
                    New to Ema John? <Link to='/signUp'>Create New Account</Link>
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

export default Login;