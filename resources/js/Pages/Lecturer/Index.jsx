import React, { useState } from 'react';
import LinkCard from '@/Components/LinkCard';
import MainLayout from '@/Layouts/MainLayout';
import { Button, Modal, Box, Typography, TextField } from '@mui/material';
import { Search } from '@mui/icons-material';
import { Link } from '@inertiajs/react';

const Index = ({ users, lecturers }) => {
    const [lecturerModalOpen, setLecturerModalOpen] = useState(false);
    const [lecturerEmail, setLecturerEmail] = useState('');
    const [lecturerData, setLecturerData] = useState(null);

    const handleOpenLecturerModal = () => setLecturerModalOpen(true);
    const handleCloseLecturerModal = () => {
        setLecturerModalOpen(false);
        setLecturerData(null); // Reset lecturer data when modal closes
    };

    const handleLecturerSearch = () => {
        // Find the lecturer by email (for now, using dummy data)
        const lecturer = users.find(user => user.email === lecturerEmail);

        if (lecturer) {
            setLecturerData(lecturer);
        } else {
            alert('Lecturer not found!');
            setLecturerData(null);
        }
    };

    const handleAddLecturer = () => {
        // Make the API call to update the user's level to 'lecturer'
        fetch(`/lecturers/${lecturerData.id}/add`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                // Any additional data you want to send to the backend, e.g., a success message
            }),
        })
            .then(response => response.json())
            .then(data => {
                if (data.user) {
                    alert(`${data.user.name} is now a lecturer!`);
                    setLecturerData(null); // Reset lecturer data after updating
                    handleCloseLecturerModal(); // Close the modal
                }
            })
            .catch(error => {
                alert('Failed to update user to lecturer.');
            });
    };

    return (
        <MainLayout>
            <h1 className='text-3xl font-bold mb-5'>Lecturers</h1>

            <Button style={{ marginBottom: '20px' }} onClick={handleOpenLecturerModal} variant="contained">Create Lecturer</Button>

            <ul className='mt-5'>
                {/* List of lecturers */}
                {lecturers.map((lecturer) => (
                    <li key={lecturer.id}>
                        <LinkCard name={lecturer.name} description={'bio'} link={`/lecturer/${lecturer.id}`} />
                    </li>
                ))}
            </ul>

            {/* Lecturer Modal */}
            <Modal
                open={lecturerModalOpen}
                onClose={handleCloseLecturerModal}
                aria-labelledby="create-lecturer-modal"
                aria-describedby="create-lecturer-form"
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
                        Search Lecturer
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
                                onClick={handleAddLecturer} // Handle adding lecturer
                            >
                                Add Lecturer
                            </Button>

                        </Box>
                    )}
                </Box>
            </Modal>

            {/* Create Course Modal */}
            {/* <CreateCourseModal open={modalOpen} onClose={handleCloseCourseModal} /> */}
        </MainLayout>
    );
};

export default Index;
