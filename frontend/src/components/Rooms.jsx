import React from 'react';

const rooms = [
  {
    name: 'Garden Villa',
    img: 'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=600&q=80',    
  },
  
  {
    name: 'Overwater Suite',
    img: 'https://images.unsplash.com/photo-1602002418082-a4443e081dd1?w=600&q=80',
  },
  {
    name: 'Family Bungalow', 
    img: 'https://images.unsplash.com/photo-1596394516093-501ba68a0ba6?w=600&q=80',
  },
];

const scrollTo = (id) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

function Rooms() {
  return (
    <div id="rooms" className="rooms-bg">
      <div className="rooms-inner">
        <p className="section-tag">Accommodations</p>
        
        <div className="rooms-grid">
          {rooms.map((r) => (
            <div className="room-card" key={r.name}>
              <img src={r.img} alt={r.name} loading="lazy" />
              <div className="room-body">
                <h3>{r.name}</h3>
                <div className="room-footer">
                  <button className="btn-gold" onClick={() => scrollTo('contact')}>Book</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Rooms;
