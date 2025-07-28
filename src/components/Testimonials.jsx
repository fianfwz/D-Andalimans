import React from 'react';
import '../Testimonials.css';

const testimonials = [
  {
    name: 'Ayu Lestari',
    message: 'Makanannya enak banget! Tempatnya cozy dan pelayanannya ramah.',
    rating: 5,
    photo: 'https://i.pravatar.cc/150?img=32',
  },
  {
    name: 'Devi Caroline',
    message: 'Sangat puas dengan pengalaman makan di sini. Recommended!',
    rating: 4,
    photo: 'https://i.pravatar.cc/150?img=47',
  },
  {
    name: 'Nina Marlina',
    message: 'Menu minumannya unik dan enak banget! Pasti balik lagi.',
    rating: 5,
    photo: 'https://i.pravatar.cc/150?img=12',
  },
  {
    name: 'Yusuf Maulana',
    message: 'Suka banget sama suasananya, cocok buat nongkrong bareng temen.',
    rating: 4,
    photo: 'https://i.pravatar.cc/150?img=8',
  },
];

const Testimonials = () => {
  return (
    <section className="testimonials-section">
      <h2 className="testimonials-title">Our Testimonials</h2>
      <div className="testimonials-grid">
        {testimonials.map((t, index) => (
          <div className="testimonial-card" key={index}>
            <img src={t.photo} alt={t.name} className="testimonial-photo" />
            <h3>{t.name}</h3>
            <p className="testimonial-message">"{t.message}"</p>
            <div className="testimonial-rating">
              {'⭐'.repeat(t.rating)}{'☆'.repeat(5 - t.rating)}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
