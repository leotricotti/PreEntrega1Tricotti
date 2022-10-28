import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { NavBar } from './components/NavBar/NavBar';
import { HeroSection } from './components/HeroSection/Hero';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <NavBar />
    <HeroSection />
  </>
);
