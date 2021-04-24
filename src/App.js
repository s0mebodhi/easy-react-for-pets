import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { GlobalStyle } from './globalStyles';
import Hero from './components/Hero';
import Products from './components/Products';
import { petsData, birdsDataTwo } from './components/Products/data';
import Feature from './components/Feature';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <GlobalStyle />
      <Hero />
      <Products heading='Кто из них милее?' data={petsData} />
      <Feature />
      <Products heading='Смотрите какие птички' data={birdsDataTwo} />
      <Footer />
    </Router>
  );
}

export default App;
