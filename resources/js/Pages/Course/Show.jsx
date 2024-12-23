import React, { useState } from 'react';
import MainLayout from '@/Layouts/MainLayout'; // Import MainLayout
import { Modal, Box, Button, IconButton, Typography } from '@mui/material';
import { Close as CloseIcon } from '@mui/icons-material';
import PaymentCard from '@/Components/PaymentCard'; // Import PaymentCard

const Show = ({ course }) => {
  const [open, setOpen] = useState(false); // State to manage modal visibility

  const handleModalOpen = () => setOpen(true);
  const handleModalClose = () => setOpen(false);

  return (
    <MainLayout>
      <Box sx={{ textAlign: 'center' }}>
        <Typography variant="h3">{course.title}</Typography>
        <Typography variant="body1">{course.description}</Typography>
        <Typography variant="h6">Price: ${course.price}</Typography>

        {/* Subscribe Button */}
        <Button
          variant="contained"
          color="primary"
          sx={{ marginTop: 3,backgroundColor: '#FFA500',color: 'white' }}
          onClick={handleModalOpen}
        >
          Subscribe
        </Button>
      </Box>

      {/* Modal for Payment */}
      <Modal open={open} onClose={handleModalClose}>
        <Box
          sx={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            bgcolor: 'white',
            padding: 4,
            borderRadius: 2,
            boxShadow: 24,
            width: 400,
          }}
        >
          {/* Close Button */}
          <IconButton
            edge="end"
            color="inherit"
            onClick={handleModalClose}
            sx={{ position: 'absolute', top: 8, right: 8 }}
          >
            <CloseIcon />
          </IconButton>

          {/* PaymentCard Component with the amount prop */}
          <PaymentCard amount={course.price} />
        </Box>
      </Modal>
    </MainLayout>
  );
};

export default Show;
