import React from 'react';
import fire from '../../config/Fire'
import '../../App.css'
import { useDispatch } from 'react-redux'
import { removeUser } from '../../redux/action'
const DashBoard = (props) => {
    const dispatch = useDispatch();

    const logout = () => {
        fire.auth().signOut();
        dispatch(removeUser())
        props.history.push('/')
    }
    return (
        <div className="dashboard">
            <h1>Hello World</h1>
            <button className='logout' onClick={logout}>Logout</button>
        </div>
    );
};

export default DashBoard;