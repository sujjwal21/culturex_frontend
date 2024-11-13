import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-gray-800 p-2 text-white mb-5 font-sans">
  <ul className="list-none flex justify-around">
    <li>
      <Link to="/" className="text-white text-lg hover:text-gray-300">Home</Link>
    </li>
    <li>
      <Link to="/upload" className="text-white text-lg hover:text-gray-300">Upload</Link>
    </li>
    <li>
      <Link to="/media" className="text-white text-lg hover:text-gray-300">Media</Link>
    </li>
  </ul>
</nav>
  );
};

export default Navbar;
