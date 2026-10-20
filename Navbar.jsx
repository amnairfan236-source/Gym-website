import React from 'react';
import './Navbar.css';

const Navbar = ({ onOpenModal }) => {
  return (
    <nav className="navbar">
      <div className="logo">FIT<span>PULSE</span></div>
      <ul className="nav-links">
        <li><a href="#home">Home</a></li>
        <li><a href="#classes">Classes</a></li>
        <li><a href="#bmi">BMI Calculator</a></li>
        <li><a href="#plans">Pricing</a></li>
      </ul>
      <button className="cta-btn" onClick={() => onOpenModal("General Membership")}>
        Join Now
      </button>
    </nav>
  );
};

export default Navbar;