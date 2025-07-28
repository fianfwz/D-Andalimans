import React from 'react';
import Halal from '../assets/Halal.png';
import DandalimansLogo from '../assets/Dandalimans.png';

const About = () => {
  return (
    <section
      style={{
        padding: '80px 20px',
        backgroundColor: '#ffffff',
        color: '#1f2e12',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        textAlign: 'center',
      }}
    >
      <h2
        style={{
          fontSize: '2.8rem',
          marginBottom: '20px',
          fontWeight: '700',
        }}
      >
        About Us
      </h2>

      <p
        style={{
          fontSize: '1.2rem',
          lineHeight: '1.8',
          maxWidth: '700px',
          marginBottom: '40px',
        }}
      >
        Welcome to <strong style={{ color: '#e67e22' }}>D’Andalimans</strong>, a home-based bakery where every treat is crafted with love, care, and a passion for delightful flavors.
        <br />
        <br />
        We offer a wide variety of homemade cookies, traditional pastries, and elegant gift hampers — perfect for personal enjoyment or any special occasion.
        <br />
        <br />
          At D’Andalimans, we believe every dessert tells a story — and we’re proud to share ours with you in every bite.
      </p>

      {/* Logo berada di bawah tulisan */}
      <div
        style={{
          display: 'flex',
          gap: '30px',
          justifyContent: 'center',
          alignItems: 'center',
          flexWrap: 'wrap',
        }}
      >
        <img
          src={DandalimansLogo}
          alt="D'Andalimans Logo"
          style={{ width: '120px', height: 'auto' }}
        />
        <img
          src={Halal}
          alt="Halal Certified"
          style={{ width: '120px', height: 'auto' }}
        />
      </div>
    </section>
  );
};

export default About;
