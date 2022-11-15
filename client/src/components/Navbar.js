import React from 'react';

import logo from '../images/logo.jpg';

function navbar () {
    return (
        <nav className='Navbar'>
            <img className='logo' src={logo} alt=""></img>
            <ul>
                <li>Home</li>
                <li>About Us</li>
                <li>Book Appointment</li>
                <li>Login</li>
            </ul>
        </nav>
    )
}

export default navbar;