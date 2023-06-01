import React from "react";
import './navbar.css';
import Logo  from '../images/Al_hareem_logo1.jpg'
import { Link } from 'react-router-dom';

function navbar() {
  return (
      <div 
    className="navbar">
      <Link className="link" to="/">
        <img className="logo" src={Logo} alt="" />
      </Link>
        
          <div className="project_name">
          <Link className="link" to="/">
            <div className="name">Al Hareem Travels</div>
            </Link>
          </div>
          <div className="item">
          {
            <ul>
              <Link className="link" to="/">
                <li><a>Home</a></li>
              </Link>
              <Link className="link" to="/about">
            <li><a>About Us</a></li>
            </Link>
            <Link className="link" to="/services">
               <li><a>Services</a></li>
            </Link>
            <Link className="link" to="/contact">
              <li><a>Contact Us</a></li>
            </Link>
            
          </ul>
          }
          </div>
    </div>    
  );
}

export default navbar;