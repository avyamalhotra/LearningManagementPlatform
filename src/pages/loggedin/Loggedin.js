import React from 'react';

import  {Footer, Blog, Possibility, Features, WhatGPT3, Header, Courses, Simplefooter} from '../../containers';
import {CTA, Brand, Navbar, Loggedinnavbar} from '../../components';
import './loggedin.css';
import '../../index.css';

import {BrowserRouter, Link, Navigate, Route, Routes} from "react-router-dom";
 
function Loggedin () {
  return (
    <div>
      <Loggedinnavbar />
      <Courses/>
      <Simplefooter />
    </div>
    

  )
}

export default Loggedin
