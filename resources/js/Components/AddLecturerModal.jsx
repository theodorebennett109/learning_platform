import React, { useState } from 'react';
import { Modal, Box, Typography, TextField, Button } from '@mui/material';
import { Search } from '@mui/icons-material';

const AddLecturerModal = ({ open, onClose, handleLecturerSearch, setLecturerEmail, lecturerEmail, lecturerData, setLecturerData, handleLecturerSelect }) => {

    return (
        <Modal open={open} onClose={onClose}>
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
                    Search Lecturer by Email
                </Typography>

                {/* Lecturer Email Input */}
                <TextField
                    fullWidth
                    label="Lecturer Email"
                    value={lecturerEmail}
                    onChange={(e) => setLecturerEmail(e.target.value)}
                    sx={{ marginBottom: 2 }}
                />
                <Button variant="contained" fullWidth onClick={handleLecturerSearch}>
                    <Search />
                    Search Lecturer
                </Button>

                {/* Display Lecturer Data if found */}
                {lecturerData && (
                    <Box sx={{ marginTop: 3 }}>
                        <Typography variant="h6">Lecturer Information:</Typography>
                        <Typography variant="body1">ID: {lecturerData.id}</Typography>
                        <Typography variant="body1">Name: {lecturerData.name}</Typography>
                        <Typography variant="body1">Email: {lecturerData.email}</Typography>

                        <Button
                            variant="contained"
                            fullWidth
                            sx={{ marginTop: 2 }}
                            onClick={() => handleLecturerSelect(lecturerData.id)} // Select lecturer
                        >
                            Select as Lecturer
                        </Button>
                    </Box>
                )}
            </Box>
        </Modal>
    );
};

export default AddLecturerModal;
