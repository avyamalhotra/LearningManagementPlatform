import React from 'react';

import  {Footer, Blog, Possibility, Features, WhatGPT3, Header, Signinheader, Forgotpassheader, Simplefooter} from '../../containers';
import {CTA, Brand, Navbar} from '../../components';
import './forgotpass.css';
import '../../index.css';

import {BrowserRouter, Link, Navigate, Route, Routes} from "react-router-dom";
 

function Forgotpassword () {
  return (
    <div className='App'>
      <div className='gradient__bg'>
        <Navbar />
      </div>
        <Forgotpassheader />
        <Simplefooter />
    </div>
  )
}

export default Forgotpassword
