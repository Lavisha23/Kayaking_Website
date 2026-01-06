import React from 'react';
import './Packages.css';
import pack1 from '../../assets/pack1.jpeg';
import pack2 from '../../assets/pack2.jpeg';
import pack3 from '../../assets/pack3.jpeg';

const Packages = () => {
  return (
    <section className="packages" id="packages">

      <div className="package-card">
        <img src={pack1} alt="Fun day out package" />
        <h3>Fun Day Out Package</h3>
        <p className="price">₹900 / Person</p>
        <p className="desc">Duration: 10:30am to 6:30pm<br/> Perfect for families and groups looking to relax and enjoy nature.</p>
      </div>

      <div className="package-card">
        <img src={pack2} alt="Kayaking package" />
        <h3>Kayaking Experience</h3>
        <p className="price">₹400 / Person</p>
        <p className="desc">Duration: 1–2 hours<br/> Guided kayaking through scenic backwaters.</p>
      </div>
      <div className="package-card">
        <img src={pack3} alt="" />
        <h3>Boat Ride</h3>
        <p className="price">₹550 / Person</p>

        <p className="desc">Duration: 40 minutes<br/> Scenic Backwater Boat Ride</p>
      </div>

    </section>
  );
};

export default Packages;
