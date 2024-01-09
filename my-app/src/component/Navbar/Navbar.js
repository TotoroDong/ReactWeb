import React from 'react';
import './Navbar.css'
import homeIcon from '../../Assets/logo.png';

const Navbar = () => {
    return (
        <nav className="navbar">
            <div>
                <a href="/"> 
                <img src={homeIcon} alt="Home" className="nav-home-icon" />
                </a>
            </div>
            <div>
                <a href="/about" className="nav-item">About</a>
                <a href="/services" className="nav-item">Services</a>
                <a href="/contact" className="nav-item">Contact</a>
            </div>
        </nav>
    );
}

export default Navbar;

