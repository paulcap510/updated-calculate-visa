import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Hero from '../components/Hero/Hero.jsx';
import About from '../components/About/About.jsx';

const Routes = () => {
  return (
    <Routes>
      <Route path="/" element={<Hero />} />
      <Route path="/about" element={<About />} />
    </Routes>
  );
};

export default Routes;
