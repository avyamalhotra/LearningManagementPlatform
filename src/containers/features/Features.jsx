import React from 'react';
import Feature from '../../components/feature/Feature';
import './features.css';

const featuresData = [
  {
    title: 'Become a DGCA Certified Drone Pilot!',
    text: '● Remote Pilot Certification Mandatory for Commercial Flying. ● License is Valid for 10 years under Drone Regulations 2022. ● Train with Us & Get Instantly Hired in the Drone Sector.',
  },
  {
    title: 'Learn GIS & Use Your Drone Data',
    text: '● Cover topics on Remote Sensing, Photogrammetry and LiDAR. ● Practice Assignments on Mapping, Orthomosaics, Thermal Imagery.',
  },
  {
    title: 'Get Trained for Industrial Drone Applications!',
    text: '● Agricultural UAV Course with Focus on Farming Techniques. ● UAV Application Course for Disaster Management Conditions.',
  },
  {
    title: 'Build and Fly Drones for Racing!',
    text: '● Study and Assemble Perfectly Suitable Components for Racing Drones. ● Master the Art of Speed Flying through Simulated Racing Circuits.',
  },
];

const Features = () => (
  <div className="gpt3__features section__padding" id="features">
    <div className="gpt3__features-heading">
      <h1 className="gradient__text">The Future is Now and You Just Need to Realize It. Step into Future Today. & Make it Happen.</h1>
    </div>
    <div className="gpt3__features-container">
      {featuresData.map((item, index) => (
        <Feature title={item.title} text={item.text} key={item.title + index} />
      ))}
    </div>
  </div>
);

export default Features;