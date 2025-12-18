// src/components/About.jsx
import React, { useEffect, useState } from 'react';
import Fade from 'react-reveal/Fade';
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

  return (
    <Fade>
      <section className="section-content-container about-section">
        <div className="about-grid">
          {/* LEFT — ABOUT ME */}
          <div className="about-left">
            <h1>About Me</h1>

            <p>
              I’m <strong>Sinchana S Naik</strong>, a Computer Science Engineering
              student from <strong>Yellapur, Karnataka</strong>.
            </p>

            <p>
              I am passionate about AI/ML, frontend development, automation, and
              building practical software solutions that solve real-world
              problems.
            </p>

            <p>
              I enjoy turning ideas into working applications and continuously
              learning modern technologies.
            </p>

            <p>
              My projects include Brain Tumor Detection using Swin Transformer &
              Grad-CAM, a Blockchain Voting System, Automatic Waste Segregation
              System (ACCS finalist), Secure Chat Application, Library CRUD App,
              and several embedded & AI-based projects.
            </p>
          </div>

          {/* RIGHT — EDUCATION */}
          <div className="about-right">
            <h1>Education</h1>

            <div className="education-item">
              <h3>Bachelor of Engineering – CSE</h3>
              <p>P A College of Engineering, Mangalore (2022 – 2026)</p>
              <p><strong>CGPA:</strong> 8.8</p>
            </div>

            <div className="education-item">
              <h3>PUC</h3>
              <p>Jawahar Navodaya Vidyalaya, Malagi (2022 Passout)</p>
            </div>

            <div className="education-item">
              <h3>SSLC</h3>
              <p>Jawahar Navodaya Vidyalaya, Malagi (2020 Passout)</p>
            </div>
          </div>
        </div>
      </section>
    </Fade>
  );
}

export default About;
