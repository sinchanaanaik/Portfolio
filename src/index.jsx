import React from 'react';
import { createRoot } from 'react-dom/client';
import { HashRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import MainApp from './MainApp';
import { darkTheme } from './theme/themes'; // 👈 correct path

const container = document.getElementById('root');
const root = createRoot(container);

root.render(
  <ThemeProvider theme={{ ...darkTheme, darkMode: true }}>
    <HashRouter>
      <MainApp />
    </HashRouter>
  </ThemeProvider>,
);
