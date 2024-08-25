import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Hero from '../components/Hero/Hero.jsx';
import About from '../components/About/About.jsx';
import VisaApi from '../components/VisaApi/VisaApi.jsx';
import Search from '../components/Search/Search.jsx';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Hero />} />
      <Route path="/about" element={<About />} />
      <Route path="/visa-api" element={<VisaApi />} />
      <Route path="/search" element={<Search />} />
    </Routes>
  );
};

export default AppRoutes;
