// src/MainApp.jsx
import React, { Suspense, useState } from 'react';
import { Switch, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import AppContext from './AppContext';
import NavBarWithRouter from './components/NavBar';
import { darkTheme, lightTheme } from './theme/themes';
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
                  component={CertificationsAchievements}
                />
              </Switch>
            </Suspense>
          </main>
        </div>
      </ThemeProvider>
    </AppContext.Provider>
  );
}

export default MainApp;
