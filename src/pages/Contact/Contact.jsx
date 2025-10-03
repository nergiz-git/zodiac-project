import React from 'react'
import './Contact.css';
import { FaTelegramPlane } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";
import { FaMapMarkedAlt } from "react-icons/fa";


function Contact() {
  return (
    <div className='contact-container'>
      <div className='contact-text'>
        <h5 style={{color:'#D5846E'}}>GET IN TOUCH</h5>
        <p className='information' style={{color:'#181828', marginBottom:'20px'}}>Contact information</p>
        <p style={{color:'#4F4F4F', fontSize:'20px', lineHeight:'30px'}}>
         Feel free to reach out to us with any questions or feedback. 
         Our team is always ready to assist you and provide the information you need.
        </p>
      </div>

      {/* content bölməsi */}
      <div className="contact-content">
        {/* SOL TƏRƏF */}
        <div className="contact-left">
          <div className="contact-card">
            <p style={{fontSize:'40px'}}>Head office</p>
            <p style={{fontSize:'20px', color:'#646464'}}><FaMapMarkedAlt style={{ marginRight: "10px", color:'#FA4F09' }} /> 202 Helga Springs Rd, Crawford, TN 38554</p>
            <p style={{fontSize:'20px', color:'#646464'}}><FaPhoneAlt style={{ marginRight: "10px", color:'#FA4F09' }} /> 800.275.8777</p>
            <p style={{fontSize:'20px', color:'#646464'}}><FaTelegramPlane style={{ marginRight: "10px", color:'#FA4F09' }} /> Telegram Support</p>
          </div>

          <div className="contact-card">
            <p style={{fontSize:'40px'}}>Opening hours</p>
            <ul className="opening-hours">
              <li><strong>Monday:</strong> 8:00 – 17:00</li>
              <li><strong>Tuesday:</strong> 8:00 – 17:00</li>
              <li><strong>Wednesday:</strong> 8:00 – 17:00</li>
              <li><strong>Thursday:</strong> 8:00 – 17:00</li>
              <li><strong>Friday:</strong> 8:00 – 17:00</li>
              <li><strong>Saturday:</strong> 10:00 – 16:00</li>
              <li><strong>Sunday:</strong> CLOSED</li>
            </ul>
          </div>
        </div>

        {/* SAĞ TƏRƏF */}
        <div className="contact-right">
          <h3 style={{paddingBottom:'40px'}}>Send us a message</h3>
          <form className="contact-form">
            <input type="text" placeholder="Your name" required />
            <input type="email" placeholder="Your email" required />
            <textarea placeholder="Your message" rows="15" required></textarea>
            <button type="submit">Submit</button>
          </form>
        </div>
      </div>
   <div className="find-container">
  <h3 className="section-subtitle">HOW TO GET TO US</h3>
  <p  style={{fontSize:'50px'}} className="section-title">Find our store</p>
  <div className="map-container">
    <iframe
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.3858875775277!2d-73.98552782411483!3d40.753536671387394!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259aae7a0b1bd%3A0xb49cafb82537f1a7!2sBryant%20Park!5e0!3m2!1str!2saz!4v1757343977528!5m2!1str!2saz"
      width="80%"
      height="550"
      style={{ border: 0 }}
      allowFullScreen
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
    ></iframe>
  </div>
</div>
    </div>  
  )
}

export default Contact
