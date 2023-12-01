import React, { useState } from 'react';
import './Navbar.css';
import shopLogo from './images/shop-logo.png'
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  return (
    <div>
          <nav className={`navbar ${isNavOpen ? 'open' : ''}`}>
      <div className="logo"><Link to="/"><img src={shopLogo} alt="logo" className='shop-logos' /></Link></div>
      <ul className={`nav-links ${isNavOpen ? 'open' : ''}`}>
        <li><Link className='navlink' to="/">Home</Link></li>
        <li><Link className='navlink' to="/product">Product</Link></li>
        <li><Link className='navlink' to="/account">Account</Link></li>
        <li><Link className='navlink' to="/cart">Cart</Link></li>
      </ul>
      <div className="burger" onClick={toggleNav}>
        &#9776; 
      </div>
    </nav>
</div>
  );
};

export default Navbar;