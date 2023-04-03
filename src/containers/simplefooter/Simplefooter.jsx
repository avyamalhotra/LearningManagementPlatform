import React from 'react';
import gpt3Logo from '../../assets/da-v01-horizontal-trans (1).png';

const Simplefooter = () => (
  <div className="gpt3__footer section__padding">

    <div className="gpt3__footer-links">
      <div className="gpt3__footer-links_logo">
        <img src={gpt3Logo} alt="gpt3_logo" />
        <p>Galore Tech IT Park, LMD Chowk, Bavdhan, Pune, Maharashtra</p>
      </div>
      <div className="gpt3__footer-links_div">
        <h4>Links</h4>
        <p>Overons</p>
        <p>Social Media</p>
        <p>Counters</p>
        <p>Contact</p>
      </div>
      <div className="gpt3__footer-links_div">
        <h4>Company</h4>
        <p>Terms & Conditions </p>
        <p>Privacy Policy</p>
        <p>Contact</p>
      </div>
    </div>

    <div className="gpt3__footer-copyright">
      <p>@2022 Droneacharya. All rights reserved.</p>
    </div>
  </div>
);

export default Simplefooter;