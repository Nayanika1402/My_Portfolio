import React, { useState } from 'react';
import img1 from "../../assets/projects/college.jpg";
import img2 from "../../assets/projects/girlscript.png";
import img3 from "../../assets/projects/status.png";
import img4 from "../../assets/projects/hacktoberfest.jpeg";

const Qualification = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const qualifications = [
    {
      img: img1,
      title: "University Institute Of Technology, The University Of Burdwan",
      description: "B.E in Computer Science and Engineering",
      year: "2022-26"
    },
    {
      img: img2,
      title: "GirlScript Summer of Code",
      description: "Open-Source Contributer with ranking of 60",
      year: "2024"
    },
    {
      img: img3,
      title: "Status Code 1-36hr Hackathon",
      description: "Ranked in top 20",
      year: "2024"
    },
    {
      img: img4,
      title: "Hacktoberfest",
      description: "1-month long open source program",
      year: "2024"
    }
  ];

  const handleNext = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % qualifications.length);
  };

  const handlePrev = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === 0 ? qualifications.length - 1 : prevIndex - 1
    );
  };

  return (
    <section id="qualifications" style={sectionStyle}>
      <div style={{ textAlign: 'center', marginBottom: '80px' }}>
        <h1 className="qualification-heading">
          My <strong className="purple">Qualifications</strong>
        </h1>
        <p style={{ color: "white" }}>Education and Experience</p>
      </div>

      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <button onClick={handlePrev} style={buttonStyle}>&lt;</button>
        
        <div style={cardStyle}>
          <img src={qualifications[activeIndex].img} alt="Qualification" style={imageStyle} />
          <h3 style={{ fontSize: '1.5rem', margin: '10px 0' }}>{qualifications[activeIndex].title}</h3>
          <p style={{ fontSize: '1.1rem', marginBottom: '10px' }}>
            <strong>{qualifications[activeIndex].description}</strong>
          </p>
          <p style={{ fontSize: '1rem', color: '#bbb' }}>{qualifications[activeIndex].year}</p>
        </div>

        <button onClick={handleNext} style={buttonStyle}>&gt;</button>
      </div>
    </section>
  );
};

// Styles
const sectionStyle = {
  color: '#fff',
  padding: '80px 0',
  background: 'linear-gradient(to bottom left, rgba(0, 0, 139, 1), rgba(12, 8, 24, 0.904))',
};

const cardStyle = {
  backgroundColor: '#1a1a1a',
  borderRadius: '8px',
  padding: '30px',
  textAlign: 'center',
  boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.5)',
  width: '350px',
  height: '450px',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center'
};

const imageStyle = {
  borderRadius: '50%',
  width: '120px',
  height: '120px',
  objectFit: 'cover',
  marginBottom: '20px'
};

const buttonStyle = {
  backgroundColor: 'transparent',
  color: '#fff',
  fontSize: '24px',
  border: 'none',
  cursor: 'pointer',
  padding: '10px',
  outline: 'none'
};

export default Qualification;
