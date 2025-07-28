import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Menu from './components/Menu';
import Gallery from './components/Gallery';
import CartPage from './pages/CartPage';
import LocationMap from './components/LocationMap';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';
import Chatbot from './components/ChatBot';

import AnimatedPage from './components/AnimatedPage'; 
import './responsive.css';

function App() {
  const location = useLocation();

  return (
    <>
      <Navbar />
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route
            path="/"
            element={
              <AnimatedPage>
                <Hero />
                <Gallery />
                <Testimonials />
                <LocationMap />
              </AnimatedPage>
            }
          />
          <Route path="/about" element={<AnimatedPage><About /></AnimatedPage>} />
          <Route path="/menu" element={<AnimatedPage><Menu /></AnimatedPage>} />
          <Route path="/cart" element={<AnimatedPage><CartPage /></AnimatedPage>} />
        </Routes>
      </AnimatePresence>
      
      <Footer />
      <Chatbot />
    </>
  );
}

export default App;
