import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Hero from '../components/Hero/Hero.jsx';
import About from '../components/About/About.jsx';
import VisaApi from '../components/VisaApi/VisaApi.jsx';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Hero />} />
      <Route path="/about" element={<About />} />
      <Route path="/visa-api" element={<VisaApi />} />
    </Routes>
  );
};

export default AppRoutes;
