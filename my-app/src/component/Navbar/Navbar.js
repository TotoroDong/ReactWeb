import React from 'react';
import './Navbar.css'

const Navbar = () => {
    return (
        <nav className="navbar">
            <div>
                <a href="/" className="nav-item">Home</a>
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

