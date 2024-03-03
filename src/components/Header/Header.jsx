import React from 'react'
import Logo from '../../assets/logo.png'
import './Header.css'
export default function Header() {
    return (
        <div className="Header">
            <img src={Logo} alt="" className='logo' />
            <ul className='header-menu'>
                <li>Home</li>
                <li>Programs</li>
                <li>Why us</li>
                <li>Plans</li>
                <li>Testimonials</li>
            </ul>

        </div>
    )
}
