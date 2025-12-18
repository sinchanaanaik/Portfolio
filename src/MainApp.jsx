// src/MainApp.jsx
import React, { Suspense } from 'react';
import { Switch, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import NavBarWithRouter from './components/NavBar';
import { darkTheme } from './theme/themes';
import FallbackSpinner from './components/FallbackSpinner';

import Home from './components/Home';

// Lazy-loaded pages
const About = React.lazy(() => import('./components/About'));
const Skills = React.lazy(() => import('./components/Skills'));
const Projects = React.lazy(() => import('./components/Projects'));
const Contact = React.lazy(() => import('./components/Contact'));
const CertificationsAchievements = React.lazy(
  () => import('./components/CertificationsAchievements'),
);

function MainApp() {
  return (
    <ThemeProvider theme={{ ...darkTheme, darkMode: true }}>
      <div className="MainApp">
        <NavBarWithRouter />

        <main className="main">
          <Suspense fallback={<FallbackSpinner />}>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/about" component={About} />
              <Route exact path="/skills" component={Skills} />
              <Route exact path="/projects" component={Projects} />
              <Route exact path="/contact" component={Contact} />
              <Route
                exact
                path="/certifications"
                render={() => (
                  <CertificationsAchievements />
                )}
              />
            </Switch>
          </Suspense>
        </main>
      </div>
    </ThemeProvider>
  );
}

export default MainApp;
