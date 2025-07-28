import React from 'react';
import '../LocationMap.css';
import { FaInstagram, FaWhatsapp } from 'react-icons/fa';

import Home from '../assets/Home.jpg'; // Pastikan path gambar benar

const Location = () => {
  return (
    <section
  className="location-section"
  style={{
    backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(${Home})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  }}
>

      <div className="location-container">
        <div className="map-box">
          <iframe
            title="Lokasi"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3589.9849586606592!2d106.89600787452983!3d-6.122288660032172!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e6a1fef97a5d1ab%3A0x2c70a1564aea97d!2sJl.%20Janur%20Kuning%2C%20Rawabadak%20Utara%2C%20Kec.%20Koja%2C%20Jkt%20Utara%2C%20Daerah%20Khusus%20Ibukota%20Jakarta%2014230!5e1!3m2!1sid!2sid!4v1753254385306!5m2!1sid!2sid"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
        <div className="contact-box">
          <h2>Contact Us</h2>
          <a
            href="https://wa.me/6281234567890"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-link whatsapp"
          >
            <FaWhatsapp className="icon" /> WhatsApp
          </a>
          <a
            href="https://instagram.com/namatoko"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-link instagram"
          >
            <FaInstagram className="icon" /> Instagram
          </a>
        </div>
      </div>
    </section>
  );
};

export default Location;
