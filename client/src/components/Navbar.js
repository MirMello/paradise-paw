import React from 'react';

import logo from '../images/logo.jpg';

function navbar () {
    return (
        <nav className='Navbar'>
            <div className='logo'>
            <img className='logo-image' src={logo} alt=""></img>
            </div>
            <ul>
                <li>Home</li>
                <li><a href='about-me'>About Me</a></li>
                <li>Book Appointment</li>
                <li>Login</li>
            </ul>
            <article>
                <h3>Facebook Reviews:</h3>
                <iframe src="https://www.facebook.com/profile.php?id=100054300710319&sk=reviews" width='250px' height='575px' />
            </article>
        </nav>
    )
}

export default navbar;