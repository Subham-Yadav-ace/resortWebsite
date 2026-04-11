import React from 'react';

const features = [
  
  { text: 'Private Beachfront' },
  { text: 'Fine Dining' },
  { text: 'Infinity Pool' },
  { text: 'Diving' },
  { text: 'Eco Friendly' },
  
];

function About() {
  return (
    <section id="about">
      <div className="section">
        <p className="section-tag">About the Resort</p>
        <h2>A Home of Natural Elegance</h2>

        <div className="about-grid">
          <img
            src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/29/cf/5e/72/zostel-coorg-madikeri.jpg?w=700&h=-1&s=1"
            alt="Resort view"
          />

          <div className="about-text">
            <p>
              Nestled in the serene hills of Madikeri, our resort offers a peaceful escape into nature.
               Surrounded by lush greenery and fresh mountain air, every stay is designed to help you relax and unwind. 
               From cozy cottages to scenic views, we create moments that stay with you long after you leave.
            </p>
           

            <div className="features-list">
              {features.map((f) => (
                <div className="feat" key={f.text}>
                  <span>{f.text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
