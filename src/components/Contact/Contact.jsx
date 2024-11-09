import React from 'react';

const Contact = () => {
  const resumeLink = "https://drive.google.com/file/d/1dT7bZAEPHTEHyPXy9dVG-QSlrTjI_q8h/view?usp=sharing"; 

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
        <div style={{ display: 'flex', justifyContent: 'center', gap: '20px', marginTop: '20px', flexWrap: 'wrap' }}>
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
                marginBottom: '10px',
              }}
            >
              Get in touch
            </button>
          </a>
          <a
            href={resumeLink}
            target="_blank"
            rel="noopener noreferrer"
          >
            <button
              style={{
                backgroundColor: '#007bff',
                color: '#fff',
                padding: '10px 20px',
                fontSize: '1em',
                border: 'none',
                cursor: 'pointer',
              }}
            >
              Resume
            </button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
