import React from 'react'
import './whatGPT3.css';
import Feature from '../../components/feature/Feature';

const WhatGPT3 = () => (
  <div className="gpt3__whatgpt3 section__margin" id="wgpt3">
    <div className="gpt3__whatgpt3-feature">
      <Feature title="What is Droneacharya?" text="We so opinion friends me message as delight. Whole front do of plate heard oh ought. His defective nor convinced residence own. Connection has put impossible own apartments boisterous. At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by." />
    </div>
    <div className="gpt3__whatgpt3-heading">
      <h1 className="gradient__text">Join DroneAcharya’s Drone Training courses, and Become a Pro Right Away!</h1>
    </div>
    <div className="gpt3__whatgpt3-container">
      <Feature title="Drone Building" text="Learn about how to manufacture and fabricate drones designs with our flagship training module" />
      <Feature title="Drone Data Processing" text="Understand the Concepts of Drone Data Outputs, and Become an Expert in GIS technologies" />
      <Feature title="Implement Python for GIS" text="Apply Programming Techniques through Python in GIS Based Applications" />
    </div>
  </div>
);

export default WhatGPT3;