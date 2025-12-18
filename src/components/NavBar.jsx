// src/components/NavBar.jsx
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useEffect, useState, useContext } from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { NavLink, withRouter } from 'react-router-dom';
import styled, { ThemeContext } from 'styled-components';
import endpoints from '../constants/endpoints';

/* ===== Styled Links ===== */

const ExternalNavLink = styled.a`
  margin-left: 18px;
  padding: 6px 0;
  font-weight: 500;
  text-decoration: none;
  color: ${(props) => props.theme.navbarTheme.linkColor};

  &:hover {
    color: ${(props) => props.theme.navbarTheme.linkHoverColor};
  }
`;

const InternalNavLink = styled(NavLink)`
  margin-left: 18px;
  padding: 6px 0;
  font-weight: 500;
  text-decoration: none;
  color: ${(props) => props.theme.navbarTheme.linkColor};

  &:hover {
    color: ${(props) => props.theme.navbarTheme.linkHoverColor};
  }

  &.navbar__link--active {
    color: ${(props) => props.theme.navbarTheme.linkActiveColor};
  }
`;

const NavBar = () => {
  const theme = useContext(ThemeContext);
  const [data, setData] = useState(null);
  const [expanded, setExpanded] = useState(false);

  useEffect(() => {
    fetch(endpoints.navbar, { method: 'GET' })
      .then((res) => res.json())
      .then((res) => setData(res))
      .catch(() => {});
  }, []);

  const getSectionsToRender = () => {
    const original = data?.sections || [];

    const filtered = original.filter((s) => {
      if (!s || !s.title) return false;
      const t = s.title.toString().trim().toLowerCase();
      return !(
        t === 'education'
        || t === 'experience'
        || t === 'resume'
      );
    });

    // ✅ ESLint-safe arrow function
    const hasTitle = (title) => filtered.some(
      (s) => s
        && s.title
        && s.title.toLowerCase() === title.toLowerCase(),
    );

    const additional = [];

    if (!hasTitle('Certifications')) {
      additional.push({
        title: 'Certifications',
        type: 'internal',
        href: '/certifications',
      });
    }

    if (!hasTitle('Contact')) {
      additional.push({
        title: 'Contact',
        type: 'internal',
        href: '/contact',
      });
    }

    return [...filtered, ...additional];
  };

  const sectionsToRender = getSectionsToRender();

  return (
    <Navbar
      fixed="top"
      expand="md"
      bg="dark"
      variant="dark"
      expanded={expanded}
    >
      <Container>
        <Navbar.Toggle
          aria-controls="responsive-navbar-nav"
          onClick={() => setExpanded(!expanded)}
        />

        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto" />

          <Nav>
            {sectionsToRender.map((section, index) => {
              if (!section || !section.title) return null;

              if (section.type === 'link') {
                return (
                  <ExternalNavLink
                    key={section.title}
                    href={section.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => setExpanded(false)}
                    theme={theme}
                  >
                    {section.title}
                  </ExternalNavLink>
                );
              }

              return (
                <InternalNavLink
                  key={section.title}
                  to={section.href}
                  exact={index === 0}
                  activeClassName="navbar__link--active"
                  onClick={() => setExpanded(false)}
                  theme={theme}
                >
                  {section.title}
                </InternalNavLink>
              );
            })}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default withRouter(NavBar);
