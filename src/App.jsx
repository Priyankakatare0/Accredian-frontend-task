// App.js
import React from 'react';
import { Container, CssBaseline } from '@mui/material';
import HeroSection from './HeroSection';

const App = () => {
  return (
    <Container className="app-container">
      <HeroSection />
    </Container>
  );
};

export default App;