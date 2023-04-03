import React, { useState, useEffect } from 'react';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import logo from '../../assets/da-v01-horizontal-trans (1).png';
import './loggedinnavbar.css';
import Signin from '../../pages/signin/Signin'
import {BrowserRouter, Link, Navigate, Route, Routes} from "react-router-dom";

const Loggedinnavbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <div className="training__navbar">
      <div className="training__navbar-links">
        <div className="training__navbar-links_logo">
          <img src={logo} alt="logo" />
        </div>
        <div className="training__navbar-links_container">
        <p><Link to="/Loggedin">All courses</Link></p>
        <p><Link to="/Mycourses">My Courses</Link></p>
        </div>
      </div>
      <div className="training__navbar-sign">
        <p><Link to="/">Logout</Link></p>
        <button type="button"><Link to="/Mycart">My Cart</Link></button>
      </div>
      <div className="training__navbar-menu">
        {toggleMenu
          ? <RiCloseLine color="#fff" size={27} onClick={() => setToggleMenu(false)} />
          : <RiMenu3Line color="#fff" size={27} onClick={() => setToggleMenu(true)} />}
        {toggleMenu && (
        <div className="training__navbar-menu_container scale-up-center">
          <div className="training__navbar-menu_container-links">
          <p><Link to="/Loggedin">All courses</Link></p>
          <p><Link to="/Mycourses">My Courses</Link></p>
          </div>
          <div className="training__navbar-menu_container-links-sign">
          <p><Link to="/">Logout</Link></p>
            <button type="button"><Link to="/Mycart">My Cart</Link></button>
          </div>
        </div>
        )}
      </div>
    </div>
  );
};

export default Loggedinnavbar;

