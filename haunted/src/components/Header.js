import React from 'react'
import logo from '../assets/haunted-logo.png'
import { NavLink } from "react-router-dom";
import './Header.css'

const Header = () => {
    return (
        <div className='header-container'>
            <NavLink>
                <img className='logo' src={logo} />
            </NavLink>
        </div>
    )
}

export default Header