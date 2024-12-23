import React, { useState } from 'react';
import { useForm } from '@inertiajs/react';
import MainLayout from '@/Layouts/MainLayout';

const Create = () => {
    const { data, setData, post } = useForm({
        title: '',
        description: '',
        price: ''
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        post('/courses', data); // Post data to the backend to create a course
    };

    return (
        <MainLayout>
            <h1 className='text-3xl font-bold mb-5'>Create Course</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Title</label>
                    <input
                        type="text"
                        value={data.title}
                        onChange={(e) => setData('title', e.target.value)}
                    />
                </div>
                <div>
                    <label>Description</label>
                    <textarea
                        value={data.description}
                        onChange={(e) => setData('description', e.target.value)}
                    />
                </div>
                <div>
                    <label>Price</label>
                    <input
                        type="number"
                        value={data.price}
                        onChange={(e) => setData('price', e.target.value)}
                    />
                </div>
                <button type="submit">Create Course</button>
            </form>
        </MainLayout>
    );
};

export default Create;
