import React from 'react'
import logo from '../assets/haunted-logo.png'
import { NavLink } from "react-router-dom";
import './Header.css'

const Header = ({ currentUser, logout }) => {
    return (
        <div className='header-container'>
            <NavLink>
                <img className='logo' src={logo} />
            </NavLink>
            <NavLink to='/login'>
                Login
            </NavLink>
            <NavLink to='/Decks'>
                Decks
            </NavLink>
            <NavLink>

            </NavLink>
        </div>
    )
}

export default Header