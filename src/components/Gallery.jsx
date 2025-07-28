import React from 'react';
import Cookie from '../assets/Cookie.jpg';

import Nastar from '../assets/Nastar.jpg';
import Kastangel from '../assets/Kastengel.jpg';
import PutriSalju from '../assets/PutriSalju.jpg';
import SoftCookies from '../assets/SoftCookies.jpg';
import BananaBread from'../assets/BananaBread.jpg';
import BrowniesCoklat from '../assets/BrowniesCoklat.jpg';
import MarmerCake from '../assets/MarmerCake.jpg';
import OatmealCookies from '../assets/OatmealCookies.jpg';

const Gallery = () => {
  const images = [
    { src: Nastar, alt: 'Nastar' },
    { src: Kastangel, alt: 'Kastengel' },
    { src: PutriSalju, alt: 'Putri Salju' },
    { src: SoftCookies, alt: 'SoftCookies' },
    { src: BananaBread, alt: 'Banana Bread' },
    { src: BrowniesCoklat, alt: 'Brownies Coklat' },
    { src: MarmerCake, alt: 'Marmer Cake'},
    { src: OatmealCookies, alt: 'Oatmeal Cookies'},
  ];

  return (
    <section
      id="gallery"
      style={{
        padding: '60px 20px',
        backgroundImage: `url(${Cookie})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center -350px',
        color: '#fff',
      }}
    >
      <div
        style={{
          backgroundColor: 'rgba(0, 0, 0, 0.3)',
          padding: '40px',
          borderRadius: '12px',
          maxWidth: '1300px',
          margin: '0 auto',
        }}
      >
        <h2
          style={{
            textAlign: 'center',
            fontSize: '2.5rem',
            marginBottom: '40px',
            textShadow: '2px 2px 8px rgba(0,0,0,0.6)',
          }}
        >
          Explore Our Gallery
        </h2>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '24px',
          }}
        >
          {images.map((img, index) => (
            <div
              key={index}
              style={{
                borderRadius: '16px',
                overflow: 'hidden',
                backgroundColor: '#fff',
                boxShadow: '0 6px 20px rgba(0,0,0,0.2)',
                transition: 'transform 0.3s ease',
                height: '320px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <img
                src={img.src}
                alt={img.alt}
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  transition: 'transform 0.3s ease',
                }}
                onMouseOver={(e) => (e.currentTarget.style.transform = 'scale(1.05)')}
                onMouseOut={(e) => (e.currentTarget.style.transform = 'scale(1)')}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
