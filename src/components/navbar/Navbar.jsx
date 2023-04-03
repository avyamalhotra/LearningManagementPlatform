import React, { useState, useEffect } from 'react';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import logo from '../../assets/da-v01-horizontal-trans (1).png';
import './navbar.css';
import Signin from '../../pages/signin/Signin'
import {BrowserRouter, Link, Navigate, Route, Routes} from "react-router-dom";

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <div className="training__navbar">
      <div className="training__navbar-links">
        <div className="training__navbar-links_logo">
          <img src={logo} alt="logo" />
        </div>
        <div className="training__navbar-links_container">
        <p><Link to="/">Home</Link></p>
        <p><a href="#training">Training</a></p>
        <p><a href="#team">Team</a></p>
        <p><a href="#testemonial">Testemonial</a></p>
        </div>
      </div>
      <div className="training__navbar-sign">
        <p><Link to="/Signin">Sign in</Link></p>
        <button type="button">Sign up</button>
      </div>
      <div className="training__navbar-menu">
        {toggleMenu
          ? <RiCloseLine color="#fff" size={27} onClick={() => setToggleMenu(false)} />
          : <RiMenu3Line color="#fff" size={27} onClick={() => setToggleMenu(true)} />}
        {toggleMenu && (
        <div className="training__navbar-menu_container scale-up-center">
          <div className="training__navbar-menu_container-links">
          <p><Link to="/">Home</Link></p>
          <p><a href="#training">Training</a></p>
          <p><a href="#team">Team</a></p>
          <p><a href="#testemonial">Testemonial</a></p>
          </div>
          <div className="training__navbar-menu_container-links-sign">
          <p><Link to="/Signin">Sign in</Link></p>
            <button type="button">Sign up</button>
          </div>
        </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;

