import React from 'react';

import  {Footer, Blog, Possibility, Features, WhatGPT3, Header, Signinheader, Signupheader, Simplefooter} from '../../containers';
import {CTA, Brand, Navbar} from '../../components';
import './signup.css';
import '../../index.css';
import Forgotpassword from '../forgotpass/Forgotpass'
import {BrowserRouter, Link, Navigate, Route, Routes} from "react-router-dom";
 

function Signup () {
  return (
    <div className='App'>
      <div className='gradient__bg'>
        <Navbar />
      </div>
        <Signupheader/>
        <Simplefooter />
    </div>
  )
}

export default Signup
