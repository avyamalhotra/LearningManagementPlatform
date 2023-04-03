import React from 'react';

import  {Footer, Blog, Possibility, Features, WhatGPT3, Header, Courses, Simplefooter} from '../../containers';
import {CTA, Brand, Navbar, Loggedinnavbar} from '../../components';
import './cart.css';
import '../../index.css';

import {BrowserRouter, Link, Navigate, Route, Routes} from "react-router-dom";
 
function cart () {
  return (
    <div>
      <Loggedinnavbar />
      <div className="cart__heading">
      <h1 className="text__cart">Shopping Cart</h1>
        </div>
      <Simplefooter />
    </div>
    

  )
}

export default cart
