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
    minHeight: '90vh',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: '4rem', // avoids navbar overlap
  },
  profileImage: {
    width: '180px',
    height: '180px',
    borderRadius: '50%',
    objectFit: 'cover',
    marginBottom: '20px',
    border: '3px solid var(--text-color)',
    backgroundColor: '#181818',
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

  if (!data) {
    return <FallbackSpinner />;
  }

  return (
    <Fade>
      <div style={styles.mainContainer} className="home-section">
        {/* Profile Image */}
        <img
          src={`${process.env.PUBLIC_URL}/images/profile-pic.jpg`}
          alt="Profile"
          style={styles.profileImage}
        />

        {/* Name */}
        <h1 style={styles.nameStyle}>{data.name}</h1>

        {/* Roles */}
        <div
          style={{
            display: 'flex',
            fontSize: '1.6em',
            marginBottom: '0.5rem',
          }}
        >
          <h2 style={styles.inlineChild}>I&apos;m&nbsp;</h2>
          <Typewriter
            options={{
              autoStart: true,
              loop: true,
              strings: data.roles || [
                'Full Stack Developer',
                'AI/ML Engineer',
              ],
            }}
          />
        </div>

        {/* Description */}
        <p
          style={{
            marginTop: 16,
            maxWidth: 720,
            textAlign: 'center',
            color: 'var(--muted)',
            lineHeight: 1.6,
          }}
        >
          {data.short_description}
        </p>

        {/* Resume + Social */}
        <div
          style={{
            marginTop: 24,
            display: 'flex',
            gap: 16,
            alignItems: 'center',
          }}
        >
          <a
            href={`${process.env.PUBLIC_URL}/profile/resume.pdf`}
            target="_blank"
            rel="noreferrer"
            download
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
  );
}
