import React, { useState } from 'react';
import './Contact.css';
import msg from '../../assets/msg.png';
import phone from '../../assets/phone.png';
import location from '../../assets/location.png';

const Contact = () => {
  const [result, setResult] = useState("");

  const onSubmit = async (event) => {
  event.preventDefault();
  setResult("Sending...");

  const formData = new FormData(event.target);

  formData.append("access_key", "061db0b0-25d7-4571-91e3-86467214553d");

  try {
    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json(); // only once

    if (data.success) {
      setResult("Message sent successfully!");
      event.target.reset();
    } else {
      setResult("Something went wrong.");
      console.log(data);
    }
  } catch (error) {
    console.error(error);
    setResult("An error occurred while sending the message.");
  }
};


  return (
    <div className="contact">

      {/* LEFT COLUMN */}
      <div className="contact-col">
        <h3>
          Send us a message
        </h3>

        <p>
          We’re always happy to help you plan your perfect kayaking experience.
          Whether you have questions about our packages or bookings, feel free
          to reach out anytime.
        </p>

        <ul>
          <li>
            <img src={phone} alt="" />
            <a href="tel:+91 9739465315">+91 9739465315</a>, <a href="tel:+91 7760020966">&nbsp;+91 7760020966</a>
          </li>

          <li>
            <img src={msg} alt="" />
            <a href="mailto:thewanderingsoul10@gmail.com">thewanderingsoul10@gmail.com</a>
          </li>

          <li>
            <img src={location} alt="" />
            The Wandering Soul Adventures <br />
            Palm Grove Villa, Furtado Island,<br/> Kokrani Village, Kakwa Post,<br/> Mulki, Karnataka 574154
          </li>
        </ul>
      </div>

      {/* RIGHT COLUMN */}
      <div className="contact-col">
        <form onSubmit={onSubmit}>

          <label>Your Name</label>
          <input type="text" name="name" required />

          <label>Email</label>
          <input type="email" name="email" required />

          <label>Phone Number</label>
          <input type="tel" name="phone" />

          <label>Message</label>
          <textarea name="message" rows="6" required></textarea>

          <button type="submit" className="btn dark-btn">
            Send Message
          </button>
        </form>

        <span>{result}</span>
      </div>

    </div>
  );
};
export default Contact;
