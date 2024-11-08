import React from 'react';
import { FaFacebook, FaInstagram, FaTwitter, FaGithub, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer style={{ backgroundColor: '#00072D', color: '#fff', padding: '10px 0', textAlign: 'center' }}>
      <div style={{ display: 'flex', justifyContent: 'center', gap: '20px', paddingBottom: '20px' }}>
        <div>
          <h3 style={{ fontWeight: 'bold' }}>Follow Me</h3>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '10px' }}>
            <a href="https://www.facebook.com/profile.php?id=61554358624442" target="_blank" rel="noopener noreferrer">
              <FaFacebook size={24} color="#fff" />
            </a>
            <a href="https://www.instagram.com/nayanikaa14_._" target="_blank" rel="noopener noreferrer">
              <FaInstagram size={24} color="#fff" />
            </a>
            <a href="https://x.com/Nayanika1402" target="_blank" rel="noopener noreferrer">
              <FaTwitter size={24} color="#fff" />
            </a>
            <a href="https://github.com/Nayanika1402" target="_blank" rel="noopener noreferrer">
              <FaGithub size={24} color="#fff" />
            </a>
            <a href="https://www.linkedin.com/in/nayanika-mukherjee-76a24027b/" target="_blank" rel="noopener noreferrer">
              <FaLinkedin size={24} color="#fff" />
            </a>
          </div>
        </div>
        <hr style={{ borderColor: '#333', height: '50px', alignSelf: 'center' }} /> {/* Vertical divider */}
        <div>
          <h5 style={{ fontWeight: 'bold' }}>Email Me</h5>
          <p style={{ color: '#a9a9a9' }}>mukherjeenayanika9@gmail.com</p>
        </div>
        <hr style={{ borderColor: '#333', height: '50px', alignSelf: 'center' }} /> {/* Vertical divider */}
        <div>
          <h5 style={{ fontWeight: 'bold' }}>Call Me</h5>
          <p style={{ color: '#a9a9a9' }}>+91 8918795743</p>
        </div>
      </div>
      <hr style={{ borderColor: '#fff', width: '80%', margin: '0 auto' }} /> {/* Divider above "Created with" */}
      <p style={{ color: '#a9a9a9', fontSize: '0.9em', marginTop: '10px' }}>
        Created with <span style={{ color: 'green' }}>❤️</span> By Nayanika Mukherjee
      </p>
    </footer>
  );
};

export default Footer;
