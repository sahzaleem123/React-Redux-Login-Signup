import React, { useState } from 'react';
import { Link, Redirect } from 'react-router-dom'
import fire from '../../../config/Fire';
import { setUser } from '../../../redux/action';
import { useDispatch, useSelector } from 'react-redux';

import './sign-up.css'
import '../../../App.css'

const SignUp = (props) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [errorDisplay, setErrorDisplay] = useState("none");
    const dispatch = useDispatch();
    const user = useSelector(state => state.User);

    // console.log(props.history)
    const signUp = (e) => {
        e.preventDefault();
        fire.auth().createUserWithEmailAndPassword(email, password)
            .then(user => {
                dispatch(setUser(user));
                props.history.push('/');
            })
            .catch(error => {
                // console.log(error)
                let a = error.code.split('/');
                let b = a[1].replace('-', ' ');
                let c = b.toUpperCase();
                // console.log(c)
                setErrorDisplay("block");
                setError(`${c}!`);
                setTimeout(() => { setErrorDisplay("none") }, 1500);
            })
    }
    if (user) {
        return (<Redirect to="/" />)
    }
    return (
        <div className='sign_up-body'>
            <form onSubmit={signUp} className='sign_up'>
                <h2>Sign Up</h2>
                <h3 style={{ display: errorDisplay }} className="err">{error}</h3>
                <label htmlFor='sign_up-email'><i className="fas fa-envelope"></i> Email:</label>
                <input value={email} onChange={e => setEmail(e.target.value)} placeholder='Email' type='email' id="sign_up-email" required></input>
                <label htmlFor='sign_up-password'><i className="fas fa-unlock-alt"></i> Password:</label>
                <input value={password} onChange={e => setPassword(e.target.value)} placeholder='Password' type='password' id="sign_up-password" required></input>
                <button type='submit' className='sign_up-btn'>Sign Up</button>
                <div className='login-div'>
                    Or <Link to={"/login"}>Login</Link>
                </div>
            </form>
        </div>

    );
};

export default SignUp;