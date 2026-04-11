import React from 'react';

function Contact() {
  return (
    <section id="contact">
      <div className="section">
        <p className="section-tag">Contact Us</p>
        <h2>Begin Your Journey</h2>
        <p className="sub">Our team is ready to craft your perfect escape. Reach out anytime.</p>

        <div className="contact-grid">
          {/* Info */}
          <div className="contact-info">
            <p><strong> Address</strong><br />Madkeri</p>
            <p><strong> Phone</strong><br />+9876543219</p>
            <p><strong> Email</strong><br />reservations@naturenest.com</p>
            

            {/* Google Map */}
            <div className="contact-map">
              <iframe
                title="Resort Location"
                src="https://www.google.com/maps?q=Madikeri,Karnataka&output=embed"
                width="100%"
                height="220"
                style={{ border: 0, display: 'block' }}
                allowFullScreen=""
                loading="lazy"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default Contact;
