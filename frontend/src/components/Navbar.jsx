import React from 'react';

const links = ['Home', 'About', 'Rooms', 'Gallery', 'Contact'];

const scrollTo = (id) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

function Navbar() {
  return (
    <nav className="navbar">
      <a href="#home" className="logo" onClick={(e) => { e.preventDefault(); scrollTo('home'); }}>
         <span>NATURE NEST</span>
      </a>

      <ul className="nav-links">
        {links.map((l) => (
          <li key={l}>
            <a href={`#${l.toLowerCase()}`} onClick={(e) => { e.preventDefault(); scrollTo(l.toLowerCase()); }}>
              {l}
            </a>
          </li>
        ))}
      </ul>

      <button className="nav-btn" onClick={() => scrollTo('contact')}>Book Now</button>
    </nav>
  );
}

export default Navbar;
