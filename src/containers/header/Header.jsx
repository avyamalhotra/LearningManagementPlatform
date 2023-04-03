import React from 'react';
import line1 from '../../assets/Line 1.png';
import line2 from '../../assets/Line 2.png';
import vr from '../../assets/vr 1.png';
import './header.css';

const Header = () => (
  <div className="training__header section__padding" id="home">
    <div className="training__header-content">
      <h1 className="gradient__text">All your course resources in one place</h1>
      <p>A community of students, recorded lectures, & additional information just  one click away</p>

      <div className="training__header-content__input">
        <button type="button">See Courses</button>
      </div>

      <div className="training__header-content__people">
        <img src={line1} />
      </div>
      <div className="training__header-content__people2">
        <img src={line2} />
      </div>
    </div>

    <div className="training__header-image">
      <img src={vr} />
    </div>
  </div>
);

export default Header;