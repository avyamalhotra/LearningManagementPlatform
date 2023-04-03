import React from 'react';

import  {Footer, Blog, Possibility, Features, WhatGPT3, Header, Signinheader, Simplefooter} from '../../containers';
import {CTA, Brand, Navbar} from '../../components';
import './signin.css';
import '../../index.css';
import Forgotpassword from '../../pages/forgotpass/Forgotpass'
import {BrowserRouter, Link, Navigate, Route, Routes} from "react-router-dom";
 

function Signin () {
  return (
    <div className='App'>
      <div className='gradient__bg'>
        <Navbar />
      </div>
        <Signinheader/>
        <Simplefooter />
    </div>
  )
}

export default Signin
