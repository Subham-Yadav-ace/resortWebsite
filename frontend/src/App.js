import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Gallery from './components/Gallery';
import Rooms from './components/Rooms';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Gallery />
      <Rooms />
      <About />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
