import React from 'react';

const photos = [
  { src: 'https://tse4.mm.bing.net/th/id/OIP.zI62UiTPur8mNPgytC3idAHaE8?rs=1&pid=ImgDetMain&o=7&rm=3', label: 'Overwater Villa' },
  { src: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=500&q=80', label: 'Deluxe Room' },
  { src: 'https://tse1.mm.bing.net/th/id/OIP.gKA34l6HK2aF3DShr1S42AHaGC?pid=ImgDet&w=474&h=386&rs=1&o=7&rm=3', label: 'Infinity Pool' },
  { src: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=500&q=80', label: 'Dining Area' },
  
];

function Gallery() {
  return (
    <div id="gallery" className="gallery-bg">
      <div className="gallery-inner">
        <p className="section-tag">Photo Gallery</p>
        <h2 style={{ fontFamily: "'Playfair Display', serif", color: '#1a3a3a', marginTop: 10, fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)' }}>
          A Glimpse of Paradise
        </h2>

        <div className="gallery-grid">
          {photos.map((p) => (
            <div key={p.label} className={p.wide ? 'wide' : ''}>
              <img src={p.src} alt={p.label} loading="lazy" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Gallery;
