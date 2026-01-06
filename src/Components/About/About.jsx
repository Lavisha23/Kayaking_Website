import React from 'react';
import './About.css';

import img1 from '../../assets/img1.jpeg';
import img2 from '../../assets/img2.jpeg';
import img3 from '../../assets/img3.jpeg';

const About = () => {
  return (
    <section className="about" id="about">

      <div className="about-card">
        <img src={img1} alt="Mangrove Kayaking" />
        <h3>Mangrove Kayaking Experience</h3>
        <p>
          Our kayaking experience is nestled within serene backwaters, surrounded
          by lush mangrove forests that create a peaceful and scenic natural
          setting. As you glide through calm waterways, you’ll be immersed in
          greenery, fresh air, and the soothing sounds of nature.
        </p>
      </div>

      <div className="about-card">
        <img src={img2} alt="Events and Celebrations" />
        <h3>Events & Private Celebrations</h3>
        <p>
          Along with our curated kayaking packages, we offer a beautiful venue
          for private celebrations such as roces, mehendi functions, parties,
          and intimate gatherings. The natural surroundings add a magical touch
          to every occasion.
        </p>
      </div>

      <div className="about-card">
        <img src={img3} alt="Friendly Service" />
        <h3>Friendly Service & Memorable Experiences</h3>
        <p>
          We take pride in offering warm, personalized service to ensure every
          guest feels welcomed. From kayaking to event planning, our team works
          closely with you to create stress-free and memorable experiences.
        </p>
      </div>

    </section>
  );
};

export default About;
