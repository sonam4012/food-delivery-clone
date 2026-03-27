import React, { useState } from 'react'
import "./Header.css";
import { LOGO_URL } from '../utils/contants';

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
                <li>Home</li>
                <li>About Us</li>
                <li>Contact Us</li>
                <li>Cart</li>
                <button className='login' onClick={handleClick}>{btnName}</button>
             </ul>
          </div>
        </div>

    )
}
export default Header;