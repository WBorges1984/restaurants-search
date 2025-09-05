import React from 'react';
import { ThemeProvider } from 'styled-components';
import { Reset } from 'styled-reset';

import Home from './pages/Home';
import theme from './theme';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Reset />
      <Home />
      <h1>Hello</h1>
      <h3>Hello</h3>
    </ThemeProvider>
  );
}

export default App;
