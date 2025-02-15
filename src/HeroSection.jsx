
// HeroSection.js
import React, { useState } from 'react';
import { Container, Typography, Button, Box } from '@mui/material';
import InputForm from './InputForm';
import './HeroSection.css';

const HeroSection = () => {
  const [open, setOpen] = useState(false);
  const [email, setEmail] = useState('');

  const handleReferNow = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const handleEmailChange = (e) => setEmail(e.target.value);
  const handleEmailSubmit = () => {
    console.log('Submitted Email:', email);
    setEmail('');
  };

  return (
    <Container className="hero-container">
      <Typography variant="h4" className="hero-title">Refer & Earn</Typography>
      <Box component="img" src="https://mir-s3-cdn-cf.behance.net/projects/404/4d497e205286625.Y3JvcCwxMzgwLDEwODAsMjM5LDA.png" alt="Refer & Earn" className="hero-image" />
      <Typography variant="h6">Share Scale with your network and you both get paid.</Typography>
      <Typography variant="h5">Earn a $250 Amazon gift card for every new referral.</Typography>
      <Button variant="contained" color="success" className="refer-button" onClick={handleReferNow}>Refer Now</Button>
      <InputForm open={open} handleClose={handleClose} email={email} handleEmailChange={handleEmailChange} handleEmailSubmit={handleEmailSubmit} />
    </Container>
  );
};

export default HeroSection;