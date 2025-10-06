import React from 'react';
import Hero from '../components/Hero';
import Values from '../components/Values';
import About from '../components/About';
import WhyChoose from '../components/WhyChoose';

const HomePage: React.FC = () => {
  return (
    <>
      <Hero />
      <Values />
      <About />
      <WhyChoose />
    </>
  );
};

export default HomePage;