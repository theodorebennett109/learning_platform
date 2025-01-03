import React, { useState, useEffect } from 'react';
import MainLayout from '@/Layouts/MainLayout';
import { Box, Typography, Button, Modal, List, ListItem } from '@mui/material';
import { ControlPoint } from '@mui/icons-material';
import AddMaterialForm from '@/Components/AddMaterialsForm';

const Show = ({ course, success, error }) => {
  const [openMaterialModal, setOpenMaterialModal] = useState(false);

  console.log(error);
  console.log(success);


  const materials = course.materials;

  const handleOpenMaterialModal = () => {
    setOpenMaterialModal(true);
  };

  const handleCloseMaterialModal = () => {
    setOpenMaterialModal(false);
  };

  useEffect(() => {
    if (success) {
      alert(success); // Show success message
    }
    if (error) {
      alert(error); // Show error message if any
    }
  }, [success, error]);

  return (
    <MainLayout>
      {/* Course Title Section */}
      <Box sx={{ textAlign: 'center', marginTop: 5 }}>
        <Typography variant="h3">{course.title}</Typography>
      </Box>

      {/* Instructor Section */}
      <Box sx={{ textAlign: 'center', marginTop: 3 }}>
        {/* <Typography variant="h6">
          Instructor: <a href={course.lecturer.link} style={{ textDecoration: 'none', color: '#1976d3' }}>
            {course.lecturer.name}
          </a>
        </Typography> */}
      </Box>

      {/* Materials Section */}
      <Box sx={{ marginTop: 5, paddingLeft: '20px' }}>
        <Typography variant="h6">Materials:</Typography>
        <List sx={{ marginBottom: 2 }}>
          {materials.length > 0 ? (
            materials.map((material) => (
              <ListItem key={material.id}>
                <Typography variant="body1">{material.title}</Typography>
              </ListItem>
            ))
          ) : (
            <Typography variant="body2" color="textSecondary">
              No materials available for this course.
            </Typography>
          )}
        </List>

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
