import React from 'react';

const Footer = () => {
  return (
    <footer
      style={{
        backgroundColor: '#1f2e12',
        color: 'white',
        padding: '40px 20px',
        marginTop: '0px',
      }}
    >
      <div
        style={{
          maxWidth: '1200px',
          margin: '0 auto',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          textAlign: 'center',
        }}
      >
        <h2
          style={{
            fontSize: '24px',
            marginBottom: '10px',
            fontFamily: '"Playfair Display", serif',
            letterSpacing: '1px',
          }}
        >
          D'Andalimans
        </h2>
        <p style={{ fontSize: '14px', marginBottom: '20px', opacity: 0.8 }}>
          Rasa Tradisional, Sentuhan Modern.
        </p>

        <div
          style={{
            display: 'flex',
            gap: '20px',
            flexWrap: 'wrap',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          {/* Instagram */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/a/a5/Instagram_icon.png"
              alt="Instagram"
              style={{ width: '24px', height: '24px' }}
            />
            <span>@d.andalimans</span>
          </div>

          {/* WhatsApp */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
              alt="WhatsApp"
              style={{ width: '24px', height: '24px' }}
            />
            <span>+62 878-1237-0173</span>
          </div>
        </div>

        <p
          style={{
            marginTop: '30px',
            fontSize: '12px',
            color: '#cccccc',
          }}
        >
          © {new Date().getFullYear()} D'Andalimans. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
