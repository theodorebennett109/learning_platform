import React from 'react';
import MainLayout from '@/Layouts/MainLayout'; // Import MainLayout

const Show = ({ course }) => {
    return (
        <MainLayout>
            <div>
                <h1>{course.title}</h1>
                <p>{course.description}</p>
                <p>Price: ${course.price}</p>
            </div>
        </MainLayout>
    );
};

export default Show;
