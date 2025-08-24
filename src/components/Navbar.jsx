import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import Logo from '../assets/Dandalimans.png';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => setMenuOpen(!menuOpen);
  const closeMenu = () => setMenuOpen(false);

  return (
    <nav className="navbar">
      <div className="logo-wrapper">
        <img src={Logo} alt="Logo" className="logo" />
        <span className="logo-text">D'Andalimans</span>
      </div>

      <div className="hamburger" onClick={toggleMenu}>
        &#9776;
      </div>

      <ul className={`nav-links ${menuOpen ? 'show' : ''}`}>
        <li>
          <NavLink
            to="/"
            className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}
            onClick={closeMenu}
          >
            Home
          </NavLink>
        </li>
       
        <li>
          <NavLink
            to="/menu"
            className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}
            onClick={closeMenu}
          >
            Menu
          </NavLink>
        </li>

         <li>
          <NavLink
            to="/about"
            className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}
            onClick={closeMenu}
          >
            About
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
