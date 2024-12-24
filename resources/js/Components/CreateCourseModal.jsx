import React, { useState } from 'react';
import { Modal, Box, Typography, TextField, Button, MenuItem, FormControl, InputLabel, Select } from '@mui/material';
import { useForm } from '@inertiajs/react';

const CreateCourseModal = ({ open, onClose, lecturers }) => {
    const { data, setData, post } = useForm({
        title: '',
        description: '',
        price: '',
        lecturer_id: '', // use lecturer_id instead of lecturer name
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        post('/courses', data); // Post data to the backend to create a course
        onClose(); // Close modal after submitting
    };

    return (
        <Modal
            open={open}
            onClose={onClose}
            aria-labelledby="create-course-modal"
            aria-describedby="create-course-form"
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
                    Create Course
                </Typography>

                <form onSubmit={handleSubmit}>
                    <TextField
                        required
                        fullWidth
                        label="Course Title"
                        value={data.title}
                        onChange={(e) => setData('title', e.target.value)}
                        sx={{ marginBottom: 2 }}
                    />
                    <TextField
                        required
                        fullWidth
                        label="Course Description"
                        multiline
                        rows={4}
                        value={data.description}
                        onChange={(e) => setData('description', e.target.value)}
                        sx={{ marginBottom: 2 }}
                    />

                    {/* Lecturer Select Dropdown */}
                    <FormControl fullWidth sx={{ marginBottom: 2 }}>
                        <InputLabel id="lecturer-label">Course Lecturer</InputLabel>
                        <Select
                            labelId="lecturer-label"
                            value={data.lecturer_id}
                            onChange={(e) => setData('lecturer_id', e.target.value)}
                            label="Course Lecturer"
                        >
                            {lecturers.map((lecturer) => (
                                <MenuItem key={lecturer.id} value={lecturer.id}>
                                    {lecturer.name} {/* Displaying lecturer name */}
                                </MenuItem>
                            ))}
                        </Select>
                    </FormControl>

                    <TextField
                        required
                        fullWidth
                        label="Price"
                        type="number"
                        value={data.price}
                        onChange={(e) => setData('price', e.target.value)}
                        sx={{ marginBottom: 2 }}
                    />
                    <Button variant="contained" type="submit" fullWidth>
                        Create Course
                    </Button>
                </form>
            </Box>
        </Modal>
    );
};

export default CreateCourseModal;
