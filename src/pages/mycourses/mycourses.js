import React from 'react';

import  {Footer, Blog, Possibility, Features, WhatGPT3, Header, Courses, Simplefooter} from '../../containers';
import {CTA, Brand, Navbar, Loggedinnavbar} from '../../components';
import './mycourses.css';
import '../../index.css';

import {BrowserRouter, Link, Navigate, Route, Routes} from "react-router-dom";
 
function Mycourses () {
  return (
    <div>
      <Loggedinnavbar />
      <div className="mycourses__heading">
      <h1 className="text__mycourses">My Courses</h1>
        </div>
      <Simplefooter />
    </div>
    

  )
}

export default Mycourses
