
// InputForm.js
import React from 'react';
import { Dialog, DialogTitle, DialogContent, DialogActions, TextField, Button, Box, Typography } from '@mui/material';
import { Email, WhatsApp, Sms, Link } from '@mui/icons-material';
import './inputForm.css';


const InputForm = ({ open, handleClose, email, handleEmailChange, handleEmailSubmit }) => {
  return (
    <Dialog open={open} onClose={handleClose} className="dialog-container">
      <DialogTitle>Invite your friends</DialogTitle>
      <DialogContent>
        <Typography variant="body1" gutterBottom>Choose how you want to invite your friends:</Typography>
        <Box className="input-container">
          <Email className="icon" />
          <TextField label="Enter email address" variant="outlined" fullWidth value={email} onChange={handleEmailChange} className="email-input" />
        </Box>
        <Box className="invite-options">
          <WhatsApp className="icon" /><Button variant="outlined" fullWidth>Invite by WhatsApp</Button>
          <Sms className="icon" /><Button variant="outlined" fullWidth>Invite by SMS</Button>
          <Link className="icon" /><Button variant="outlined" fullWidth>Copy my invite link</Button>
        </Box>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>Close</Button>
        <Button variant="contained" color="primary" onClick={handleEmailSubmit}>Submit</Button>
      </DialogActions>
    </Dialog>
  );
};

export default InputForm;