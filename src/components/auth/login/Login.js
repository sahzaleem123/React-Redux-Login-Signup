import React, { useState } from 'react';
import { Link, Redirect } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import fire from '../../../config/Fire';
import './login.css'
import '../../../App.css'
import { setUser } from '../../../redux/action';


const Login = (props) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [errorDisplay, setErrorDisplay] = useState("none");
    const dispatch = useDispatch();
    const user = useSelector(state => state.User);

    const login = (e) => {
        e.preventDefault();
        fire.auth().signInWithEmailAndPassword(email, password)
            .then((user) => {
                dispatch(setUser(user));
                props.history.push('/');
            })
            .catch(error => {
                // console.log(error)
                let a = error.code.split('/');
                let b = a[1].replace('-', ' ')
                let c = b.toUpperCase();
                // console.log(c)
                setErrorDisplay("block")
                setError(`${c}!`)
                setTimeout(() => { setErrorDisplay("none") }, 1500)
            })
    }
    if (user) {
        return (<Redirect to="/" />)
    }
    // console.log(error)
    return (
        <div className='login-body'>
            <form onSubmit={login} className='login'>
                <h2>Login</h2>
                <h3 style={{ display: errorDisplay }} className="err">{error}</h3>
                <label htmlFor='login-email'><i className="fas fa-user-lock"></i> Email:</label>
                <input value={email} onChange={e => setEmail(e.target.value)} placeholder='Email' type='email' id="login-email" required></input>
                <label htmlFor='login-password'><i className="fas fa-lock"></i> Password:</label>
                <input value={password} onChange={e => setPassword(e.target.value)} placeholder='Password' type='password' id="login-password" required></input>
                <button type='submit' className='login-btn'>Login</button>
                <div className='sign-up'>
                    Or <Link to={"/signup"}>Register now!</Link>
                </div>
            </form>
        </div>
    );
};

export default Login;