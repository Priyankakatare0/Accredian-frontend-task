import React from 'react';
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  Button,
  Box,
  Typography,
} from '@mui/material';
import EmailIcon from '@mui/icons-material/Email';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import SmsIcon from '@mui/icons-material/Sms';
import LinkIcon from '@mui/icons-material/Link';

const InputForm = ({ open, handleClose, email, handleEmailChange, handleEmailSubmit }) => {
  return (
    <Dialog open={open} onClose={handleClose}
    PaperProps={{
        sx: {
          backgroundColor: '#242424',
          color: 'white',
        },
      }}
      >
      <DialogTitle>Invite your friends</DialogTitle>
      <DialogContent>
        <Typography variant="body1" gutterBottom sx={{ color: 'white' }}>
          Choose how you want to invite your friends:
        </Typography>

        {/* Invite by Email */}
        <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
          <EmailIcon sx={{ mr: 2, color: 'white' }} />
          <TextField
            label="Enter email address"
            variant="outlined"
            fullWidth
            value={email}
            onChange={handleEmailChange}
            sx={{
                '& .MuiInputLabel-root': {
                  color: 'white', // Change label text color to white
                },
                '& .MuiOutlinedInput-root': {
                  '& fieldset': {
                    borderColor: 'white', // Change border color to white
                  },
                  '&:hover fieldset': {
                    borderColor: 'white', // Change border color on hover
                  },
                },
                '& .MuiInputBase-input': {
                  color: 'white', // Change input text color to white
                },
              }}
          />
        </Box>

        {/* Invite by WhatsApp */}
        <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
          <WhatsAppIcon sx={{ mr: 2, color: 'white' }} />
          <Button variant="outlined" fullWidth sx={{ color: 'white', borderColor: 'white' }}>
            Invite by WhatsApp
          </Button>
        </Box>

        {/* Invite by SMS */}
        <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 , color:'white'}}>
          <SmsIcon sx={{ mr: 2, color: 'white' }} />
          <Button variant="outlined" fullWidth sx={{ color: 'white', borderColor: 'white' }}>
            Invite by SMS
          </Button>
        </Box>

        {/* Copy Invite Link */}
        <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
          <LinkIcon sx={{ mr: 2, color: 'white' }} />
          <Button variant="outlined" fullWidth sx={{ color: 'white' , borderColor: 'white' }}>
            Copy my invite link
          </Button>
        </Box>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose} color="white">
          Close
        </Button>
        <Button
          variant="contained"
          color="primary"
          onClick={handleEmailSubmit}
          sx={{ ml: 2 }}
        >
          Submit
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default InputForm;