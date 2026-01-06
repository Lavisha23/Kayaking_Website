import React from 'react'
import "./Location.css";

const Location = () => {
  return (
    <section id="location" className="location-section">
      

      <div className="location-wrapper">

        <div className="location-details">
          <h3>Our Kayaking Location</h3>
          <p>
            The Wandering Soul Adventures 
            <br/> Palm Grove Villa, Furtado Island,<br/> Kokrani Village, Kakwa Post,<br/> Mulki, Karnataka 574154
          </p><br/>

           <p>
            <strong>Phone:</strong>
            <a href="tel:+919739465315">&nbsp;+91 9739465315, </a>
            <a href="tel:+917760020966">+91 7760020966</a>
          </p>

          
            <p><strong>Email:</strong>
            <a href="mailto:thewanderingsoul10@gmail.com">
             &nbsp; thewanderingsoul10@gmail.com
            </a></p><br/>
          <a
            href="https://www.google.com/maps/dir/?api=1&destination=13.1021402,74.7948788"
            target="_blank"
            rel="noopener noreferrer"
            className="direction-btn"
          >
            Get Directions
          </a>  
        </div>

        <div className="map-box">
        <iframe
            title="Google Map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3885.9533764016173!2d74.79487879999999!3d13.1021402!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bbcadba53b12301%3A0x817df405fc39f0f3!2sThe%20Wandering%20Soul%20Adventures!5e0!3m2!1sen!2sin!4v1767011869181!5m2!1sen!2sin"
            width="100%"
            height="350"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
        />

        </div>

      </div>
    </section>
  );
};

export default Location;
