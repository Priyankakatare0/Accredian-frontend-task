// import './App.css'
import React, { useState } from 'react';
import HeroSection from './HeroSection';
import InputForm from './InputForm';
import { Container, CssBaseline } from '@mui/material';

const App = () => {
  const [showInputForm, setShowInputForm] = useState(false); // State to toggle InputForm

  const handleReferNow = () => {
    setShowInputForm(true); // Show InputForm when "Refer Now" is clicked
  };

  return (
    <Container sx={{backgroundColor: '#242424', color:'white' , textAlign:'center'}}  >
      <CssBaseline />
      {!showInputForm ? (
        <HeroSection onReferNow={handleReferNow} /> // Pass onReferNow to HeroSection
      ) : (
        <InputForm />
      )}
    </Container>
  );
};

export default App;