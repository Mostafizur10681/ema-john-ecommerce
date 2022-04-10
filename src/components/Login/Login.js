import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Login.css'
import google from '../../images/google.png'
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const Login = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);

    const navigate = useNavigate();
    const handleEmailBlur = event => {
        setEmail(event.target.value)
    }
    const handlePasswordBlur = event => {
        setPassword(event.target.value)
    }

    if (user) {
        navigate('/shop')
    }

    const handleSingIn = event => {
        event.preventDefault()
        signInWithEmailAndPassword(email, password)
    }
    return (
        <div className='form-container'>
            <div>
                <h2 className='form-title'>Login</h2>
                <form onSubmit={handleSingIn}>
                    <div className='input-group'>
                        <label htmlFor="email">Email</label>
                        <input onBlur={handleEmailBlur} type="email" name="email" id="" />
                    </div>
                    <div className='input-group'>
                        <label htmlFor="password">Password</label>
                        <input onBlur={handlePasswordBlur} type="password" name="password" id="" />
                    </div>
                    <p style={{ color: 'red' }}> {error?.message}</p>
                    {
                        loading && <p>Loading..</p>
                    }
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