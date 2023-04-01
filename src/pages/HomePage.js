import React from "react";
import About from "../components/About";
import Demo from "../components/Demo";
import FAQ from "../components/FAQ/FAQ";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import HowItWorks from "../components/HowItWorks/HowItWorks";
import Navbar from "../components/Navbar";
// import Testimonials from '../components/Testimonials';

const HomePage = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <Demo />
      <HowItWorks />
      <FAQ />
      <Footer />
    </div>
  );
};

export default HomePage;
