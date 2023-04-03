import React from 'react';
import line1 from '../../assets/Line 1.png';
import line2 from '../../assets/Line 2.png';
import rectangle from '../../assets/Group 1.png';
import logo from '../../assets/Standard Collection 14 (1).png';
import './signinheader.css';
import {BrowserRouter, Link, Navigate, Route, Routes} from "react-router-dom";

const Signinheader = () => (
  <div className="training__header section__padding" id="home"> 
    <div className="training__header-image__signin">
      <img src={rectangle} />
      <input type="email" placeholder="Email" />
      <input type="password" className = "pass" placeholder="Password" />
      <button class="btn" className='login'><Link to="/Loggedin">Login</Link></button>
      <p><Link to="/Forgotpassword">Forgot password?</Link></p>
      <p className='signupprompt'>Dont have an account?</p>
      <p className='signup'><Link to="/Signup">Sign up</Link></p>
    </div>
    
    <div className="training__header-content__signin">
      <h1 className="gradient__text__signin">All your resources</h1>
      <h2 className="gradient__text__signin">in one p </h2><h3 className="gradient__text__signin2">/</h3><h2> ace</h2>
      <p>We at DroneAcharya care deeply about the quality of learning you receive. This platform is specifically designed to allow you to get the most out of your courses, come back whenever!</p>

      
    </div>

    
  </div>
);

export default Signinheader;