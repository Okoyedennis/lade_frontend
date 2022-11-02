import React from 'react'
import About from '../components/About';
import Demo from '../components/Demo';
import Footer from '../components/Footer';
import Hero from '../components/Hero';
import Navbar from '../components/Navbar';
// import Testimonials from '../components/Testimonials';

const HomePage = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <Demo />
      <Footer />
    </div>
  );
}

export default HomePage