// src/components/Skills.jsx
import React from 'react';
import PropTypes from 'prop-types';
import Fade from 'react-reveal';
import { Container } from 'react-bootstrap';

// ICONS
import {
  FaPython,
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaReact,
  FaGithub,
  FaDatabase,
  FaCode,
} from 'react-icons/fa';

import {
  SiTensorflow,
  SiHuggingface,
  SiArduino,
  SiC,
} from 'react-icons/si';

import Header from './Header';

const ICON_SIZE = 56;

// 3 Skill Sections
const PROGRAMMING_LANGUAGES = [
  { title: 'Python', Icon: FaPython, color: '#3776AB' },
  { title: 'C', Icon: SiC, color: '#A8B9CC' },
  { title: 'JavaScript', Icon: FaJsSquare, color: '#F7DF1E' },
  { title: 'HTML5', Icon: FaHtml5, color: '#E34F26' },
  { title: 'CSS3', Icon: FaCss3Alt, color: '#1572B6' },
];

const FRAMEWORKS_LIBRARIES = [
  { title: 'React.js', Icon: FaReact, color: '#61DAFB' },
  { title: 'TensorFlow', Icon: SiTensorflow, color: '#FF6F00' },
  { title: 'Hugging Face Transformers', Icon: SiHuggingface, color: '#FEE440' },
];

const TOOLS_PLATFORMS = [
  { title: 'GitHub', Icon: FaGithub, color: '#181717' },
  { title: 'VS Code', Icon: FaCode, color: '#007ACC' },
  { title: 'Arduino', Icon: SiArduino, color: '#00979D' },
  { title: 'SQL (Databases)', Icon: FaDatabase, color: '#4DB33D' },
];

const renderSection = (sectionTitle, sectionData) => (
  <div style={{ marginBottom: '2.5rem', textAlign: 'center' }}>
    <h3 style={{ marginBottom: '1.5rem' }}>{sectionTitle}</h3>

    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        flexWrap: 'wrap',
        gap: '2.2rem',
      }}
    >
      {sectionData.map(({ title, Icon, color }) => (
        <div
          key={title}
          style={{
            width: 150,
            textAlign: 'center',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Icon size={ICON_SIZE} style={{ color }} />
          <p style={{ marginTop: 10, fontSize: '0.95rem' }}>{title}</p>
        </div>
      ))}
    </div>
  </div>
);

export default function Skills({ header }) {
  return (
    <>
      <Header title={header} />
      <Fade>
        <div className="section-content-container" style={{ paddingTop: 8 }}>
          <Container style={{ textAlign: 'center' }}>
            {renderSection('Programming Languages', PROGRAMMING_LANGUAGES)}
            {renderSection('Frameworks & Libraries', FRAMEWORKS_LIBRARIES)}
            {renderSection('Tools & Platforms', TOOLS_PLATFORMS)}
          </Container>
        </div>
      </Fade>
    </>
  );
}

Skills.propTypes = {
  header: PropTypes.string.isRequired,
};
