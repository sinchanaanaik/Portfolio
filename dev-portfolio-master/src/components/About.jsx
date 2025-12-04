// src/components/About.jsx
import React, { useEffect, useState } from 'react';
import Fade from 'react-reveal';
import endpoints from '../constants/endpoints';
import FallbackSpinner from './FallbackSpinner';

function About() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch(endpoints.about)
      .then((res) => res.json())
      .then((res) => setData(res))
      .catch(() => {});
  }, []);

  if (!data) {
    return <FallbackSpinner />;
  }

  const paragraphStyle = {
    marginBottom: '1.25rem',
    maxWidth: '800px',
    textAlign: 'justify',
    lineHeight: 1.65,
  };

  return (
    <Fade>
      <section
        className="about-section"
        style={{
          width: '100%',
          padding: '3rem 2rem',
          lineHeight: '1.6',
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '2.5rem',
        }}
      >
        {/* LEFT — ABOUT ME */}
        <div>
          <h1 style={{ fontSize: '2.5rem', marginBottom: '1.5rem' }}>
            About Me
          </h1>

          {/* paragraph 1 — broken into separate JSX expressions */}
          <p style={paragraphStyle}>
            <span>I’m </span>
            <strong>Sinchana S Naik</strong>
            <span>, a Computer Science Engineering student</span>
            <span> from </span>
            <strong>Yellapur, Karnataka</strong>
            <span>.</span>
          </p>

          {/* paragraph 2 — broken into separate JSX expressions */}
          <p style={paragraphStyle}>
            <span>I am passionate about AI/ML, frontend development,</span>
            <span> automation, and building practical software solutions</span>
            <span> that solve real-world problems.</span>
          </p>

          {/* paragraph 3 */}
          <p style={paragraphStyle}>
            <span>I enjoy turning ideas into working applications</span>
            <span> and continuously learning modern technologies.</span>
          </p>

          {/* projects summary — split into pieces */}
          <p style={paragraphStyle}>
            <span>My projects include:</span>
            <span> Brain Tumor Detection using Swin Transformer & Grad-CAM,</span>
            <span> a Blockchain Voting System,</span>
            <span> Automatic Waste Segregation System (ACCS finalist),</span>
            <span> Secure Chat Application, Library CRUD App,</span>
            <span> and several embedded & AI-based projects.</span>
          </p>
        </div>

        {/* RIGHT — EDUCATION */}
        <div>
          <h1 style={{ fontSize: '2.5rem', marginBottom: '1.5rem' }}>
            Education
          </h1>

          {/* Engineering */}
          <div style={{ marginBottom: '1.5rem' }}>
            <h2 style={{ fontSize: '1.4rem', margin: 0 }}>
              Bachelor of Engineering – CSE
            </h2>
            <p className="education-detail">
              P A College of Engineering, Mangalore (2022 – 2026)
            </p>
            <p className="education-detail">CGPA: 8.8</p>
          </div>

          {/* PUC */}
          <div style={{ marginBottom: '1.5rem' }}>
            <h2 style={{ fontSize: '1.4rem', margin: 0 }}>PUC</h2>
            <p className="education-detail">
              Jawahar Navodaya Vidyalaya, Malagi (2022 Passout)
            </p>
          </div>

          {/* SSLC */}
          <div>
            <h2 style={{ fontSize: '1.4rem', margin: 0 }}>SSLC</h2>
            <p className="education-detail">
              Jawahar Navodaya Vidyalaya, Malagi (2020 Passout)
            </p>
          </div>
        </div>
      </section>
    </Fade>
  );
}

export default About;
