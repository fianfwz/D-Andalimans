import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';

import Nastar from '../assets/Nastar.jpg';
import Kastangel from '../assets/Kastengel.jpg';
import PutriSalju from '../assets/PutriSalju.jpg';
import SoftCookies from '../assets/SoftCookies.jpg';
import BananaBread from '../assets/BananaBread.jpg';
import BrowniesCoklat from '../assets/BrowniesCoklat.jpg';
import MarmerCake from '../assets/MarmerCake.jpg';
import OatmealCookies from '../assets/OatmealCookies.jpg';

const menuItems = [
  { name: 'Nastar', price: 35000, image: Nastar, description: 'Kue kering isi nanas, favorit saat hari raya.' },
  { name: 'Kastangel', price: 28000, image: Kastangel, description: 'Kue keju gurih dan renyah yang lezat untuk camilan.' },
  { name: 'Putri Salju', price: 15000, image: PutriSalju, description: 'Kue kering berbalut gula halus, lumer di mulut.' },
  { name: 'Soft Cookies', price: 20000, image: SoftCookies, description: 'Cookies lembut dengan potongan coklat premium.' },
  { name: 'Banana Bread', price: 25000, image: BananaBread, description: 'Roti pisang lembut dengan aroma khas dan manis alami.' },
  { name: 'Brownies Coklat', price: 30000, image: BrowniesCoklat, description: 'Brownies legit dengan rasa coklat pekat dan moist.' },
  { name: 'Marmer Cake', price: 32000, image: MarmerCake, description: 'Kue bolu dengan pola marmer dan tekstur lembut.' },
  { name: 'Oatmeal Cookies', price: 18000, image: OatmealCookies, description: 'Cookies sehat dengan campuran oat dan kacang.' },
];

const Menu = () => {
  const [cart, setCart] = useState([]);
  const navigate = useNavigate();
  const cartButtonRef = useRef(null);

  useEffect(() => {
    const stored = localStorage.getItem('cart');
    if (stored) {
      setCart(JSON.parse(stored));
    }
  }, []);

  const addToCart = (item, event) => {
    const newCart = [...cart, item];
    setCart(newCart);
    localStorage.setItem('cart', JSON.stringify(newCart));

    const notif = document.createElement('div');
    notif.innerText = `${item.name} ditambahkan ke keranjang!`;
    Object.assign(notif.style, {
      position: 'fixed',
      top: '80px',
      right: '30px',
      background: '#1f2e12',
      color: '#fff',
      padding: '10px 20px',
      borderRadius: '8px',
      zIndex: 9999,
      opacity: 1,
      transition: 'opacity 0.6s ease-out',
    });
    document.body.appendChild(notif);
    setTimeout(() => {
      notif.style.opacity = 0;
      setTimeout(() => document.body.removeChild(notif), 600);
    }, 1500);

    const img = event.currentTarget.parentNode.parentNode.querySelector('img');
    const cartBtn = cartButtonRef.current;
    if (!img || !cartBtn) return;

    const imgRect = img.getBoundingClientRect();
    const cartRect = cartBtn.getBoundingClientRect();
    const flyingImg = img.cloneNode();

    Object.assign(flyingImg.style, {
      position: 'fixed',
      left: imgRect.left + 'px',
      top: imgRect.top + 'px',
      width: imgRect.width + 'px',
      height: imgRect.height + 'px',
      zIndex: 9999,
      transition: 'all 0.8s ease-in-out',
    });

    document.body.appendChild(flyingImg);

    requestAnimationFrame(() => {
      Object.assign(flyingImg.style, {
        left: cartRect.left + 'px',
        top: cartRect.top + 'px',
        width: '0px',
        height: '0px',
        opacity: '0.5',
      });
    });

    setTimeout(() => document.body.removeChild(flyingImg), 800);
  };

  return (
    <>
      {/* Tombol keranjang mengambang */}
      <div
        style={{
          position: 'fixed',
          top: '120px',
          right: '20px',
          zIndex: 1000,
        }}
      >
        <button
          ref={cartButtonRef}
          onClick={() => navigate('/cart')}
          style={{
            backgroundColor: '#ed7e2ee3',
            color: 'white',
            border: 'none',
            padding: '10px 20px',
            borderRadius: '8px',
            fontWeight: 'bold',
            cursor: 'pointer',
            boxShadow: '0 4px 10px rgba(0,0,0,0.2)',
          }}
        >
          🛒 ({cart.length})
        </button>
      </div>

      {/* Section Menu */}
      <section
        id="menu"
        style={{
          padding: '60px 20px',
          backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url("/bg-kayu.jpg")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          fontFamily: "'Segoe UI', sans-serif",
        }}
      >
        <div style={{ maxWidth: '1300px', margin: '0 auto' }}>
          {/* Judul */}
          <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '40px' }}>
            <h2
              style={{
                fontSize: '2.5rem',
                fontWeight: '700',
                color: 'white',
                textAlign: 'center',
                fontFamily: '"Playfair Display", serif',
                textShadow: '2px 2px 8px rgba(0,0,0,0.7)',
                letterSpacing: '2px',
              }}
            >
              Our Menu
            </h2>
          </div>

          {/* Grid menu item */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
              gap: '24px',
            }}
          >
            {menuItems.map((item, index) => (
              <div
                key={index}
                style={{
                  borderRadius: '16px',
                  overflow: 'hidden',
                  backgroundColor: '#fff',
                  boxShadow: '0 6px 20px rgba(0,0,0,0.1)',
                  transition: 'transform 0.3s ease',
                }}
                onMouseOver={(e) => (e.currentTarget.style.transform = 'scale(1.03)')}
                onMouseOut={(e) => (e.currentTarget.style.transform = 'scale(1)')}
              >
                <div style={{ height: '250px', width: '100%' }}>
                  <img
                    src={item.image}
                    alt={item.name}
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      display: 'block',
                    }}
                  />
                </div>
                <div style={{ padding: '16px', textAlign: 'left' }}>
                  <h3 style={{ marginBottom: '6px', fontSize: '1.2rem', color: '#333' }}>{item.name}</h3>
                  <p style={{ fontSize: '1rem', color: 'black', marginBottom: '8px' }}>{item.description}</p>
                  <p style={{ fontWeight: '700', color: '#f97316', fontSize: '1.1rem', marginTop: '12px' }}>
                    Rp{item.price.toLocaleString()}
                  </p>
                  <button
                    onClick={(e) => addToCart(item, e)}
                    style={{
                      backgroundColor: '#6e340aff',
                      color: '#fff',
                      border: 'none',
                      padding: '12px',
                      borderRadius: '10px',
                      cursor: 'pointer',
                      fontWeight: 'bold',
                      width: '100%',
                      fontSize: '1rem',
                      transition: 'transform 0.2s ease',
                    }}
                    onMouseDown={(e) => (e.currentTarget.style.transform = 'scale(0.96)')}
                    onMouseUp={(e) => (e.currentTarget.style.transform = 'scale(1)')}
                    onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
                  >
                    + Tambah ke Keranjang
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Menu;
