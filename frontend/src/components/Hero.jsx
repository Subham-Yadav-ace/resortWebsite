import React from 'react';

const scrollTo = (id) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

function Hero() {
  return (
    <section id="home" className="hero">
      <div className="hero-content">
        <p className="tag">Madikeri</p>
        <h1>Where Nature<br /><em>Feels Like Home</em></h1>
        <p className="desc">
        A quiet getaway surrounded by nature, offering comfort, views, and a warm stay
        </p>
        <div className="hero-btns">
          <button className="btn-gold" onClick={() => scrollTo('rooms')}>Explore Rooms</button>
          <button className="btn-outline" onClick={() => scrollTo('contact')}>Book a Stay</button>
        </div>
      </div>
    </section>
  );
}

export default Hero;
