import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'; // Optional, for custom styles

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul className="navbar-list">
        <li>
          <Link to="/" className="navbar-link">
            Home
          </Link>
        </li>
        <li>
          <Link to="/upload" className="navbar-link">
            Upload
          </Link>
        </li>
        <li>
          <Link to="/media" className="navbar-link">
            Media
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
