import React from 'react';

import  {Footer, Blog, Possibility, Features, WhatGPT3, Header} from '../../containers';
import {CTA, Brand, Navbar} from '../../components';
import './home.css';
import '../../index.css';

import {BrowserRouter, Link, Navigate, Route, Routes} from "react-router-dom";
 

function Home () {
  return (
    <div className='App'>
      <div className='gradient__bg'>
        <Navbar />
        <Header />
      </div>
      <Brand />
      <WhatGPT3 />
      <Features />
      <Possibility />
      <CTA />
      <Blog />
      <Footer />
    </div>
  )
}

export default Home
