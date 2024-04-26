import React from 'react';
import './navbar.css';

function Navbar() {
    return (
      <nav className="navbar">
        
        <h1 className='title'>GeeksFoods</h1>

        <ul className="nav-links">
          <li><a href="#">Home</a></li>
          <li><a href="#">court</a></li>
          <li><a href="#">restraunt</a></li>
          <li><a href="#">food</a></li>
          <li><a href="#">Contact</a></li>
        </ul>
        <button className="get-started-btn">Get Started</button>
      </nav>
       
    );
  }

export default Navbar;