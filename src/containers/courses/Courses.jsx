import React from 'react';
import Article from '../../components/article/Article';
import { course01,course02,course03,course04,course05,course06} from './index';
import './courses.css';

const Courses = () => (
  <div className="gpt3__blog section__padding" id="blog">
    <div className="gpt3__blog-heading">
      <h1 className="gradient__text__courses">All Courses</h1>
    </div>
    <div className="gpt3__blog-container">

      <div className="gpt3__blog-container_groupB__courses">
        <Article imgUrl={course01}  text="Learn GIS & Use Your Drone Data" button1text="Add to cart" button2text="Learn More"/>
        <Article imgUrl={course02}  text="Become a Pro at Python for GIS" button1text="Add to cart" button2text="Learn More"/>
        <Article imgUrl={course03}  text="Become a DGCA Certified Drone Pilot" button1text="Add to cart" button2text="Learn More" />
        <Article imgUrl={course04}  text="Train to become a Drone Builder" button1text="Add to cart"  button2text="Learn More"/>
        <Article imgUrl={course05}  text="Give Wings to Your Aerial Videography Career" button1text="Add to cart" button2text="Learn More"/>
        <Article imgUrl={course06}  text="Get Trained for Industrial Drone Applications" button1text="Add to cart"  button2text="Learn More"/>
      </div>
    </div>
  </div>
)

export default Courses;