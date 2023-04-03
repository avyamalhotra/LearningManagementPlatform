import React from 'react';
import line1 from '../../assets/Line 1.png';
import line2 from '../../assets/Line 2.png';
import rectangle from '../../assets/Group 1.png';
import logo from '../../assets/Standard Collection 14 (1).png';
import './signupheader.css';
import {BrowserRouter, Link, Navigate, Route, Routes} from "react-router-dom";

const Signupheader = () => (
  <div className="training__header section__padding" id="home"> 
    <div className="training__header-image__signin">
      <img src={rectangle} />
      <input type="name" className= 'name__signup'placeholder="Full Name" />
      <input type="email" className='email__signup' placeholder="Email" />
      <input type="password" className = "pass__signup" placeholder="Password" />
      <button class="btn" className='login__signup'>Sign up</button>
      <p className='signupprompt__signup'>Already have an account?</p>
      <p className='signup__signup'><Link to="/Signin">Sign in</Link></p>
    </div>
    
    <div className="training__header-content__signin">
      <h1 className="gradient__text__signin">All your resources</h1>
      <h2 className="gradient__text__signin">in one p </h2><h3 className="gradient__text__signin2">/</h3><h2> ace</h2>
      <p>We at DroneAcharya care deeply about the quality of learning you receive. This platform is specifically designed to allow you to get the most out of your courses, come back whenever!</p>

      
    </div>

    
  </div>
);

export default Signupheader;