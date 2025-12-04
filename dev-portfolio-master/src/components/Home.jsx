// src/components/Home.jsx
import React, { useEffect, useState } from 'react';
import Typewriter from 'typewriter-effect';
import Fade from 'react-reveal';
import endpoints from '../constants/endpoints';
import Social from './Social';
import FallbackSpinner from './FallbackSpinner';

const styles = {
  nameStyle: {
    fontSize: '4.5em',
    fontWeight: 700,
    marginBottom: '0.2em',
  },
  inlineChild: {
    display: 'inline-block',
  },
  mainContainer: {
    height: '100%',
    minHeight: '90vh',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  profileImage: {
    width: '180px',
    height: '180px',
    borderRadius: '50%',
    objectFit: 'cover',
    marginBottom: '20px',
    border: '3px solid var(--text-color)',
  },
};

export default function Home() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch(endpoints.home, { method: 'GET' })
      .then((res) => res.json())
      .then((res) => setData(res))
      .catch(() => {});
  }, []);

  return data ? (
    <Fade>
      <div style={styles.mainContainer} className="home-section">
        {/* Profile Photo */}
        <img
          src="/images/profile-pic.jpg"
          alt="Profile"
          style={styles.profileImage}
        />

        {/* Name */}
        <h1 style={styles.nameStyle}>{data.name}</h1>

        {/* Roles */}
        <div
          style={{
            flexDirection: 'row',
            fontSize: '1.6em',
            display: 'flex',
          }}
        >
          <h2 style={styles.inlineChild}>I&apos;m&nbsp;</h2>
          <Typewriter
            options={{
              loop: true,
              autoStart: true,
              strings: data.roles || [
                'Full Stack Developer',
                'AI/ML Engineer',
              ],
            }}
          />
        </div>

        {/* Short description */}
        <p
          style={{
            marginTop: 16,
            maxWidth: 720,
            textAlign: 'center',
            color: 'var(--muted)',
          }}
        >
          {data.short_description}
        </p>

        {/* Resume + Social */}
        <div
          style={{
            marginTop: 20,
            display: 'flex',
            gap: 16,
            alignItems: 'center',
          }}
        >
          <a
            href={data.resume || '/profile/resume.pdf'}
            target="_blank"
            rel="noreferrer"
            style={{
              border: '1px solid var(--card-border)',
              color: 'var(--text-color)',
              padding: '10px 18px',
              borderRadius: 12,
              textDecoration: 'none',
              fontWeight: 600,
            }}
          >
            Download Resume
          </a>

          <Social />
        </div>
      </div>
    </Fade>
  ) : (
    <FallbackSpinner />
  );
}
