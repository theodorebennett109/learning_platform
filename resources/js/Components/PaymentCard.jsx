import React, { useState } from 'react';
import { TextField, Button, Box, Typography } from '@mui/material';
import { ArrowCircleRight } from '@mui/icons-material';

const PaymentCard = ({ amount }) => {
  const [cardNumber, setCardNumber] = useState('');
  const [expiryDate, setExpiryDate] = useState('');
  const [cvv, setCvv] = useState('');

  const handlePaymentSubmit = (e) => {
    e.preventDefault();

    alert(`Payment of $${amount} Submitted!`);
  };

  return (
    <Box sx={{ padding: 3 }}>
      <Typography variant="h6" gutterBottom>
        Enter Payment Details
      </Typography>

      {/* Display the amount */}
      <Typography variant="body1" sx={{ marginBottom: 2 }}>
        Amount: ${amount}
      </Typography>

      <form onSubmit={handlePaymentSubmit}>
        <TextField
          label="Card Number"
          fullWidth
          value={cardNumber}
          onChange={(e) => setCardNumber(e.target.value)}
          sx={{ marginBottom: 2 }}
          required
        />
        <TextField
          label="Expiry Date (MM/YY)"
          fullWidth
          value={expiryDate}
          onChange={(e) => setExpiryDate(e.target.value)}
          sx={{ marginBottom: 2 }}
          required
        />
        <TextField
          label="CVV"
          fullWidth
          value={cvv}
          onChange={(e) => setCvv(e.target.value)}
          sx={{ marginBottom: 2 }}
          required
        />
        <Button variant="contained" type="submit" fullWidth>
          Submit Payments <ArrowCircleRight />
        </Button>
      </form>
    </Box>
  );
};

export default PaymentCard;
