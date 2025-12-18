import React, {
  useState,
  useEffect,
} from 'react';
import {
  Container,
  Row,
  Col,
  Card,
} from 'react-bootstrap';
import PropTypes from 'prop-types';
import Fade from 'react-reveal/Fade';
import Header from './Header';
import endpoints from '../constants/endpoints';
import FallbackSpinner from './FallbackSpinner';

const styles = {
  containerStyle: {
    marginBottom: 25,
  },
  image: {
    height: 200,
    objectFit: 'cover',
  },
};

export default function Projects({ header }) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(endpoints.projects)
      .then((res) => res.json())
      .then((res) => setData(res))
      .finally(() => setLoading(false));
  }, []);

  if (loading) {
    return (
      <>
        <Header title={header} />
        <div className="section-content-container">
          <FallbackSpinner />
        </div>
      </>
    );
  }

  const projectsArray = data && Array.isArray(data.projects)
    ? data.projects
    : [];

  return (
    <>
      <Header title={header} />
      <div className="section-content-container">
        <Container style={styles.containerStyle}>
          <Row
            xs={1}
            sm={1}
            md={2}
            lg={3}
            className="g-4"
          >
            {projectsArray.map((project, index) => (
              <Col key={project.title || index}>
                <Fade>
                  <Card
                    className="h-100 bg-dark text-white rounded-4 overflow-hidden"
                  >
                    <Card.Img
                      variant="top"
                      src={project.image}
                      alt={project.title}
                      style={styles.image}
                    />

                    <Card.Body className="d-flex flex-column">
                      <Card.Title>
                        {project.title}
                      </Card.Title>

                      <Card.Text className="text-muted">
                        {project.description}
                      </Card.Text>

                      <div className="mt-auto d-flex flex-wrap gap-2">
                        {project.tags && project.tags.map((tag) => (
                          <span
                            key={tag}
                            className="badge rounded-pill bg-light text-dark px-3 py-2"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </Card.Body>
                  </Card>
                </Fade>
              </Col>
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
