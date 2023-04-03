import React from 'react';

import  {Footer, Blog, Possibility, Features, WhatGPT3, Header, Courses, Simplefooter} from '../../containers';
import {CTA, Brand, Navbar, Loggedinnavbar, Article} from '../../components';
import './giscourse.css';
import '../../index.css';
import { course01,course02,course03,course04,course05,course06} from '../../containers/courses/index';

import {BrowserRouter, Link, Navigate, Route, Routes} from "react-router-dom";
 
function Giscourse () {
  return (
    <div>
      <Loggedinnavbar />
      <div className="gpt3__blog section__padding" id="blog">
    <div className="gpt3__blog-heading">
      <h1 className="gradient__text__courses">Drone Data Processing</h1>
    </div>
    <div className="gpt3__blog-container">

      <div className="gpt3__blog-container_groupB__courses">
        <Article imgUrl={course01}  text="Recorded Lectures"/>
        <Article imgUrl={course02}  text="Lecture Slides" />
        <Article imgUrl={course03}  text="Additional Information" />
      </div>
    </div>
  </div>
      <Simplefooter />
    </div>
    

  )
}

export default Giscourse
