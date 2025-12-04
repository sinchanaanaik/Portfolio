// src/components/CertificationsAchievements.jsx
import React from 'react';
import {
  Container,
  Row,
  Col,
  Card,
  ListGroup,
} from 'react-bootstrap';

const styles = {
  card: {
    borderRadius: 12,
    marginBottom: '1.5rem',
    boxShadow: '0 6px 18px rgba(0,0,0,0.08)',
    width: '100%',
    padding: '0.75rem 1.25rem',
    minHeight: '500px', // Bigger card
  },
  header: {
    fontSize: '1.35rem',
    fontWeight: 700,
    padding: '0.6rem 0',
  },
  listItem: {
    border: 'none',
    padding: '0.75rem 0',
  },
  itemTitle: {
    fontWeight: 600,
    marginBottom: '0.3rem',
    fontSize: '1rem',
    textAlign: 'justify',
  },
  desc: {
    textAlign: 'justify',
    marginBottom: '0.3rem',
    color: 'var(--muted)',
    fontSize: '0.9rem',
  },
  metaText: {
    fontSize: '0.85rem',
    color: 'var(--muted)',
    textAlign: 'justify',
  },
};

function renderItem(item) {
  return (
    <ListGroup.Item
      key={item.title || item.name}
      style={styles.listItem}
    >
      <div style={styles.itemTitle}>{item.title || item.name}</div>
      <div style={styles.desc}>{item.desc}</div>
      <div style={styles.metaText}>
        <span>{item.org}</span>
        {item.meta ? (
          <span>
            {' '}
            •
            {' '}
            {item.meta}
          </span>
        ) : null}
      </div>
    </ListGroup.Item>
  );
}

export default function CertificationsAchievements() {
  const certifications = [
    {
      name: 'CS50x — Computer Science',
      org: 'Harvard University (edX)',
      desc:
        'Strong foundation in algorithms, problem-solving, memory, debugging and real-world C programming.',
      meta: 'Certification',
    },
    {
      name: 'Big Data 101 & Hadoop 101',
      org: 'IBM Cognitive Class',
      desc:
        'Learned Hadoop, HDFS, distributed processing and big-data architecture basics.',
      meta: 'Certification',
    },
    {
      name: 'Python, C & Data Visualization',
      org: 'Infosys Springboard',
      desc:
        'Practical coding in Python and C along with hands-on data visualization fundamentals.',
      meta: 'Certification',
    },
    {
      name: 'Networking Basics',
      org: 'Cisco Networking Academy',
      desc:
        'Covered routing, IP addressing, packet flow and OSI layers.',
      meta: 'Certification',
    },
    {
      name: 'Data Structures in C',
      org: 'Great Learning Academy',
      desc:
        'Learned linked lists, trees, stacks, queues and hashing in C.',
      meta: 'Certification',
    },
    {
      name: 'Flutter Forward Workshop',
      org: 'GDSC',
      desc:
        'Introduction to Flutter UI development for mobile.',
      meta: 'Workshop',
    },
  ];

  const achievements = [
    {
      title: 'Co-Author — Research Paper',
      org: 'ERCICAM 2025 — 2nd International Conference',
      desc:
      'Co-authored the research paper “Optimized Deep Learning Model for Multi-Class Student Performance Analysis”, focusing on advanced ML techniques for academic performance prediction.',
      meta: 'Research Paper',
    },
    {
      title: 'Finalist — ACCS Design Challenge 2024',
      org: 'IIIT Bangalore',
      desc:
        'Built an automated waste-segregation system using sensors and embedded logic.',
      meta: 'Top Finalist',
    },
    {
      title: 'Participant — Hack Summit 2025',
      org: 'Hackathon (24 hours)',
      desc:
        'Developed an AI-powered scholarship recommender + auto-form-filler.',
      meta: 'Hackathon Project',
    },
    {
      title: 'GirlGeekHack 2023',
      org: 'IEEE CS & NITK Surathkal',
      desc:
        'Built rapid innovation prototypes in a women-centric hackathon.',
      meta: 'Hackathon',
    },
  ];

  const research = [
    {
      title: 'ICRAI 2024 — Responsible AI',
      org: 'Mangalore University',
      desc:
        'Explored ethical AI systems focusing on fairness, transparency, and responsible AI governance.',
      meta: 'Conference',
    },
  ];

  return (
    <Container className="section-content-container">
      <Row className="justify-content-center" style={{ marginTop: '1rem' }}>

        {/* LEFT CARD — Certifications */}
        <Col xs={12} md={6} className="d-flex justify-content-center">
          <Card style={styles.card}>
            <Card.Header style={styles.header}>Certifications</Card.Header>
            <Card.Body>
              <ListGroup variant="flush">
                {certifications.map((c) => renderItem(c))}
              </ListGroup>
            </Card.Body>
          </Card>
        </Col>

        {/* RIGHT CARD — Achievements + Research */}
        <Col xs={12} md={6} className="d-flex justify-content-center">
          <Card style={styles.card}>
            <Card.Header style={styles.header}>Achievements</Card.Header>
            <Card.Body>
              <ListGroup variant="flush">
                {achievements.map((a) => renderItem(a))}
              </ListGroup>
            </Card.Body>

            <Card.Header style={styles.header}>
              Research & Conferences
            </Card.Header>
            <Card.Body>
              <ListGroup variant="flush">
                {research.map((r) => renderItem(r))}
              </ListGroup>
            </Card.Body>
          </Card>
        </Col>

      </Row>
    </Container>
  );
}
