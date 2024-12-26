import React, { useState } from 'react';
import MainLayout from '@/Layouts/MainLayout'; // Import MainLayout
import { Box, Typography, Button, Modal } from '@mui/material';
import { ControlPoint } from '@mui/icons-material';
import AddMaterialForm from '@/Components/AddMaterialsForm';

const Show = ({ course }) => {
  const [openMaterialModal, setOpenMaterialModal] = useState(false); // State to control modal visibility

  const handleOpenMaterialModal = () => {
    setOpenMaterialModal(true);
  };

  const handleCloseMaterialModal = () => {
    setOpenMaterialModal(false);
  };

  return (
    <MainLayout>
      {/* Course Title Section */}
      <Box sx={{ textAlign: 'center', marginTop: 5 }}>
        <Typography variant="h3">{course.title}</Typography>
      </Box>

      {/* Instructor Section */}
      <Box sx={{ textAlign: 'center', marginTop: 3 }}>
        <Typography variant="h6">
          Instructor: <a href={course.lecturer.link} style={{ textDecoration: 'none', color: '#1976d3' }}>
            {course.lecturer.name}
          </a>
        </Typography>
      </Box>

      {/* Materials Section */}
      <Box sx={{ marginTop: 5, paddingLeft: '20px' }}>
        <Typography variant="h6">Materials:</Typography>
        <Button
          variant="contained"
          startIcon={<ControlPoint />}
          sx={{ marginTop: 2 }}
          onClick={handleOpenMaterialModal}
        >
          Add Material
        </Button>
      </Box>

      {/* Modal for Adding Material */}
      <Modal
        open={openMaterialModal}
        onClose={handleCloseMaterialModal}
        aria-labelledby="add-material-modal"
        aria-describedby="add-material-form"
      >
        <Box
          sx={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            backgroundColor: 'white',
            padding: 4,
            borderRadius: 2,
            boxShadow: 24,
            width: 400,
          }}
        >
          <Typography variant="h6" gutterBottom>
            Add Material
          </Typography>
          <AddMaterialForm courseId={course.id} />
        </Box>
      </Modal>
    </MainLayout>
  );
};

export default Show;
