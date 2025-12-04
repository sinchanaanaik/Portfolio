// src/components/Projects.jsx
import React, { useState, useEffect } from 'react';
import { Container, Row } from 'react-bootstrap';
import PropTypes from 'prop-types';
import Fade from 'react-reveal/Fade';
import Header from './Header';
import endpoints from '../constants/endpoints';
import ProjectCard from './projects/ProjectCard';
import FallbackSpinner from './FallbackSpinner';

const styles = {
  containerStyle: {
    marginBottom: 25,
  },
};

export default function Projects({ header }) {
  const [data, setData] = useState(null);
  const [fetchError, setFetchError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let mounted = true;
    setLoading(true);

    fetch(endpoints.projects, { method: 'GET' })
      .then((res) => {
        if (!res.ok) {
          throw new Error(`Network response was not ok (${res.status})`);
        }
        return res.json();
      })
      .then((json) => {
        if (!mounted) return;
        setData(json);
        setFetchError(null);
      })
      .catch((err) => {
        if (mounted) setFetchError(err.message || String(err));
      })
      .finally(() => {
        if (mounted) setLoading(false);
      });

    return () => {
      mounted = false;
    };
  }, []);

  if (loading) {
    return (
      <>
        <Header title={header} />
        <div className="section-content-container">
          <Container style={styles.containerStyle}>
            <FallbackSpinner />
            <p style={{ marginTop: 12 }}>Loading projects...</p>
          </Container>
        </div>
      </>
    );
  }

  if (fetchError) {
    return (
      <>
        <Header title={header} />
        <div className="section-content-container">
          <Container style={styles.containerStyle}>
            <h4>Could not load projects</h4>
            <pre
              style={{
                background: 'rgba(0,0,0,0.06)',
                padding: 12,
                borderRadius: 6,
                overflow: 'auto',
              }}
            >
              {String(fetchError)}
            </pre>
            <p>
              Check the browser console and the terminal where the dev server
              runs for more details.
            </p>
          </Container>
        </div>
      </>
    );
  }

  const projectsArray = data && Array.isArray(data.projects) ? data.projects
    : [];

  if (!projectsArray.length) {
    return (
      <>
        <Header title={header} />
        <div className="section-content-container">
          <Container style={styles.containerStyle}>
            <h4>No projects available</h4>
            <p>
              Either the endpoint returned an empty list or the JSON structure
              is different. Fetched data (if any):
            </p>
            <pre
              style={{
                background: 'rgba(0,0,0,0.06)',
                padding: 12,
                borderRadius: 6,
                overflow: 'auto',
                maxHeight: 320,
              }}
            >
              {JSON.stringify(data, null, 2)}
            </pre>
          </Container>
        </div>
      </>
    );
  }

  return (
    <>
      <Header title={header} />
      <div className="section-content-container">
        <Container style={styles.containerStyle}>
          <Row xs={1} sm={1} md={2} lg={3} className="g-4">
            {projectsArray.map((project, index) => (
              <Fade key={project.title || index}>
                <ProjectCard project={project} />
              </Fade>
            ))}
          </Row>
        </Container>
      </div>
    </>
  );
}

Projects.propTypes = {
  header: PropTypes.string.isRequired,
};
