import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navbar-links">
        <Link to="/" className="navbar-link">
          Home
        </Link>
        <Link to="/about" className="navbar-link">
          About
        </Link>
        <Link to="/" className="navbar-link">
          Services
        </Link>
        <Link to="/" className="navbar-link">
          Contact
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
