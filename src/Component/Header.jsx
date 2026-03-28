import React, { useState } from 'react'
import "./Header.css";
import { LOGO_URL } from '../utils/contants';
import { Link } from 'react-router-dom';

const Header = () => {
    const[btnName, setBtnName] = useState("login");

    const handleClick = () =>{
        btnName === "login" ? setBtnName("logout") : setBtnName("login")
    }
    return(
        <div className='header'>
        <div className='logo-container'>
          <img 
          className='logo'
          src={LOGO_URL } alt='logo'/>
          </div>
          <div className='nav-items'>
             <ul>
                <li> <Link to="/">Home</Link></li>
                <li>
                    <Link to="/about">About Us</Link>
                </li>
                <li>
                   <Link to="/contact">Contact Us</Link> 
                    </li>
                <li>Cart</li>
                <button className='login' onClick={handleClick}>{btnName}</button>
             </ul>
          </div>
        </div>

    )
}
export default Header;