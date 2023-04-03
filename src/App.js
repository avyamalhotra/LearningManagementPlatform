import React from 'react';

import  {Footer, Blog, Possibility, Features, WhatGPT3, Header} from './containers';
import {CTA, Brand, Navbar} from './components';
import './App.css';
import './index.css';
import Home from './pages/home/Home'
import Signin from './pages/signin/Signin'
import Forgotpassword from './pages/forgotpass/Forgotpass';
import Signup from './pages/signup/Signup'
import Loggedin from './pages/loggedin/Loggedin'
import Mycart from './pages/cart/cart'
import Mycourses from './pages/mycourses/mycourses'
import Giscourse from './pages/giscourse/Giscourse';

import {BrowserRouter, Link, Navigate, Route, Routes} from "react-router-dom";
 

function App () {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path ="/" element ={<Home />} />
        <Route path ="/Signin" element ={<Signin />} />
        <Route path ="/Forgotpassword" element ={<Forgotpassword/>} />
        <Route path ='/Signup' element ={<Signup />} />
        <Route path ='/Loggedin' element={<Loggedin />} />
        <Route path ='/Mycart' element= {< Mycart />} />
        <Route path ='/Mycourses' element ={<Mycourses />} />
        <Route path ='/Giscourse' element ={<Giscourse />} />
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
