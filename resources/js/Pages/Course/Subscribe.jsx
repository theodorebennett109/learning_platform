import React, { useState } from 'react';
import MainLayout from '@/Layouts/MainLayout'; // Import MainLayout
import { Modal, Box, Button, IconButton, Typography, Card, CardContent } from '@mui/material';
import { Close as CloseIcon } from '@mui/icons-material';
import PaymentCard from '@/Components/PaymentCard'; // Import PaymentCard

const Subscribe = ({ course }) => {
  const [open, setOpen] = useState(false); // State to manage modal visibility

  const handleModalOpen = () => setOpen(true);
  const handleModalClose = () => setOpen(false);

  // Static Instructor Data (using John Brown for now)
  const instructor = {
    name: 'John Brown',
    link: '/instructors/john-brown', // Placeholder for the instructor's page link
  };

  return (
    <MainLayout>
      <Box sx={{ display: 'flex', justifyContent: 'center', paddingTop: 5 }}>
        {/* Card with course details */}
        <Card sx={{ width: 350, padding: 2, textAlign: 'center' }}>
          <CardContent>
            <Typography variant="h5">{course.title}</Typography>
            <Typography variant="body2" sx={{ marginTop: 1 }}>
              {course.description}
            </Typography>

            <Typography variant="body2" sx={{ marginTop: 1 }}>
              Instructor: <a href={instructor.link} style={{ textDecoration: 'none', color: '#1976d3' }}>
                {instructor.name}
              </a>
            </Typography>

            <Typography variant="h6" sx={{ marginTop: 2 }}>
              Price: ${course.price}
            </Typography>

            {/* Subscribe Button */}
            <Button
              variant="contained"
              color="primary"
              sx={{ marginTop: 3, backgroundColor: '#FFA500', color: 'white' }}
              onClick={handleModalOpen}
            >
              Subscribe
            </Button>
          </CardContent>
        </Card>
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

          {/* Payment Card */}
          <PaymentCard amount={course.price} />
        </Box>
      </Modal>
    </MainLayout>
  );
};

export default Subscribe;
