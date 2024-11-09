import React from 'react';

const Contact = () => {
  return (
    <section
      id="contact"
      style={{
        backgroundColor: '#00072D',
        color: '#fff',
        padding: '50px 20px',
        textAlign: 'center',
      }}
    >
      <div style={{ marginBottom: '20px' }}>
        <h2 style={{ fontSize: '2em', fontWeight: 'bold' }}>Interested? Let's talk</h2>
        <p
          style={{
            color: '#a9a9a9',
            maxWidth: '600px',
            margin: '0 auto',
            padding: '0 10px',
            fontSize: '1em',
          }}
        >
          Driven by a passion for meeting new people and learning from their unique journeys, 
          I’m always excited to connect, collaborate, and co-create on impactful projects. Embracing diversity and open to new ideas,
          I believe that together we can build something truly amazing. Let’s connect and make a difference!
        </p>
        <a
          href="https://www.linkedin.com/in/nayanika-mukherjee-76a24027b/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button
            style={{
              backgroundColor: '#fff',
              color: '#000',
              padding: '10px 20px',
              fontSize: '1em',
              border: 'none',
              cursor: 'pointer',
              marginTop: '20px',
            }}
          >
            Get in touch
          </button>
        </a>
      </div>
    </section>
  );
};

export default Contact;
