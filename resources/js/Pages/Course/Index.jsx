import CreateCourseModal from '@/Components/CreateCourseModal';
import LinkCard from '@/Components/LinkCard';
import MainLayout from '@/Layouts/MainLayout';
import { Link } from '@inertiajs/react';
import { Button } from '@mui/material';
import React, { useState } from 'react';

const Index = ({ courses,lecturers }) => {
    const [modalOpen, setModalOpen] = useState(false);

    const handleOpen = () => setModalOpen(true);
    const handleClose = () => setModalOpen(false);

    // const lecturers = [
    //     { id: 1, name: 'John Brown' },
    //     { id: 2, name: 'Jane Smith' },
    //     { id: 3, name: 'Mary Johnson' },
    // ];


    return (
        <MainLayout>
            <h1 className='text-3xl font-bold mb-5'>Courses</h1>

            {/* Button to create a new course */}
            {/* <Link href="/courses/create" style={{marginBottom: '20px'}}> */}
                <Button style={{marginBottom: '20px'}} onClick={handleOpen} variant="contained"> Create Course</Button>
            {/* </Link> */}

            {/* Modal for Create Course */}
            <CreateCourseModal open={modalOpen} onClose={handleClose} lecturers={lecturers} />

            <ul className='mt-5'>
                {/* List of courses */}
                {courses.map((course) => (
                    <li key={course.id}>
                        <LinkCard name={course.title} description={course.description} link={`/courses/${course.id}`} />
                        {/* <Link href={`/courses/${course.id}`}>{course.title}</Link> */}
                    </li>
                ))}
            </ul>
        </MainLayout>
    );
};

export default Index;
