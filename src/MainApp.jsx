// src/MainApp.jsx
import React, { Suspense, useState } from 'react';
import { Switch, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import AppContext from './AppContext';
import Layout from './components/Layout';
import NavBarWithRouter from './components/NavBar';
import FallbackSpinner from './components/FallbackSpinner';

import { darkTheme, lightTheme } from './theme/themes';
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
  const [darkMode, setDarkMode] = useState(true);

  const darkModeState = {
    value: darkMode,
    toggle: () => setDarkMode((prev) => !prev),
  };

  const theme = darkMode ? darkTheme : lightTheme;

  return (
    <AppContext.Provider value={{ darkMode: darkModeState }}>
      <ThemeProvider theme={{ ...theme, darkMode }}>
        <div className="MainApp">
          {/* Global Navigation */}
          <NavBarWithRouter />

          {/* Page Content */}
          <main className="main">
            <Suspense fallback={<FallbackSpinner />}>
              <Switch>
                <Route exact path="/">
                  <Layout>
                    <Home />
                  </Layout>
                </Route>

                <Route exact path="/about">
                  <Layout>
                    <About />
                  </Layout>
                </Route>

                <Route exact path="/skills">
                  <Layout>
                    <Skills />
                  </Layout>
                </Route>

                <Route exact path="/projects">
                  <Layout>
                    <Projects />
                  </Layout>
                </Route>

                <Route exact path="/contact">
                  <Layout>
                    <Contact />
                  </Layout>
                </Route>

                <Route exact path="/certifications">
                  <Layout>
                    <CertificationsAchievements />
                  </Layout>
                </Route>
              </Switch>
            </Suspense>
          </main>
        </div>
      </ThemeProvider>
    </AppContext.Provider>
  );
}

export default MainApp;
