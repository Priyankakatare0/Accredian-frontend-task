import React, { useState } from 'react';
import './HeroSection.css'
import {
  Container,
  Typography,
  Button,
  Box,
} from '@mui/material';
import InputForm from './InputForm'; // Import the InputForm component

const HeroSection = () => {
  const [open, setOpen] = useState(false); // State to control the popup
  const [email, setEmail] = useState(''); // State to store the email input

  const handleReferNow = () => {
    setOpen(true); // Open the popup
  };

  const handleClose = () => {
    setOpen(false); // Close the popup
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value); // Update email state
  };

  const handleEmailSubmit = () => {
    console.log('Submitted Email:', email); // Handle email submission
    setEmail(''); // Clear the input field
  };

  return (
    <Container sx={{ textAlign: 'center', mt: 8,}}>
      {/* Hero Section Content */}
      <Typography variant="h4" sx={{paddingTop: '1.2rem'}} gutterBottom>
        Refer & Earn
      </Typography>
      <Box
        component="img"
        src="https://mir-s3-cdn-cf.behance.net/projects/404/4d497e205286625.Y3JvcCwxMzgwLDEwODAsMjM5LDA.png"
        alt="Refer & Earn"
        sx={{ width: '100%', maxWidth: 500, height: 'auto', mb: 4, mt:1 }}
      />
      <Typography variant="h6" paragraph>
        Share Scale with your network and you both get paid.
      </Typography>

      {/* ReferEarn Content */}
      <Typography variant="h5" gutterBottom>
        Earn a $250 Amazon gift card for every new referral.
      </Typography>
      <Button variant="contained"  color="success" sx={{mb : 4, mt: 2}} onClick={handleReferNow}>
        Refer Now
      </Button>
      

      {/* Render InputForm as a Popup */}
      <InputForm
        open={open}
        handleClose={handleClose}
        email={email}
        handleEmailChange={handleEmailChange}
        handleEmailSubmit={handleEmailSubmit}
      />
    </Container>
  );
};

export default HeroSection;