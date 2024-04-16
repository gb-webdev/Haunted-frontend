import React from 'react'
import logo from '../assets/haunted-logo.png'
import './Header.css'

const Header = () => {
    return (
        <div className='header-container'>
            <img className='logo' src={logo} />
        </div>
    )
}

export default Header