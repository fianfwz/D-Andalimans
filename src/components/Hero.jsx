import React from 'react';
import { Link } from 'react-router-dom';
import '../responsive.css';

const Hero = () => {
  return (
    <section className="hero-container">
      <video
        src="/BG_ANDALIMANS.mp4"
        autoPlay
        loop
        muted
        playsInline
        className="hero-video"
      />
      <div className="hero-text">
        <h1>Nourishing and Filling You</h1>
        <p>Discover healthy food for your everyday life – fresh, natural, and full of flavor.</p>
        <div className="hero-buttons">
          <Link to="/menu" className="secondary-btn">Order Now</Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;
