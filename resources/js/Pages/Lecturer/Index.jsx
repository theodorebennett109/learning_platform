import React, { useState } from 'react';
import LinkCard from '@/Components/LinkCard';
import MainLayout from '@/Layouts/MainLayout';
import { Button, Modal, Box, Typography, TextField } from '@mui/material';
import CreateLecturerModal from '@/Components/CreateLecturerModal';



const Index = ({ users, lecturers }) => {

const [lecturerModalOpen, setLecturerModalOpen] = useState(false);
    const handleOpenLecturerModal = () => setLecturerModalOpen(true);
    const handleCloseLecturerModal = () => setLecturerModalOpen(false);



   return (
        <MainLayout>
            <h1 className='text-3xl font-bold mb-5'>Lecturers</h1>
            <CreateLecturerModal open={lecturerModalOpen} onClose={handleCloseLecturerModal} users={users} />
            <Button style={{ marginBottom: '20px' }} onClick={handleOpenLecturerModal} variant="contained">Create Lecturer</Button>

            <ul className='mt-5'>
                {/* List of lecturers */}
                {lecturers.map((lecturer) => (
                    <li key={lecturer.id}>
                        <LinkCard name={lecturer.name} description={'bio'} link={`/lecturer/${lecturer.id}`} />
                    </li>
                ))}
            </ul>



            {/* Create Course Modal */}
            {/* <CreateCourseModal open={modalOpen} onClose={handleCloseCourseModal} /> */}
        </MainLayout>
    );
};

export default Index;
