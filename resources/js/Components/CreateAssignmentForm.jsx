// CreateAssignmentForm.jsx
import React, { useState } from 'react';
import { TextField, Button } from '@mui/material';
import { useForm } from '@inertiajs/react';

const CreateAssignmentForm = ({ courseId }) => {
    const { data, setData, post } = useForm({
        title: '',
        description: '',
        due_date: '',
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        post(`/courses/${courseId}/assignments`, data);
    };

    return (
        <form onSubmit={handleSubmit}>
            <TextField
                required
                label="Assignment Title"
                value={data.title}
                onChange={(e) => setData('title', e.target.value)}
                fullWidth
                sx={{ marginBottom: 2 }}
            />
            <TextField
                required
                label="Description"
                multiline
                value={data.description}
                onChange={(e) => setData('description', e.target.value)}
                fullWidth
                sx={{ marginBottom: 2 }}
            />
            <TextField
                required
                label="Due Date"
                type="date"
                value={data.due_date}
                onChange={(e) => setData('due_date', e.target.value)}
                fullWidth
                sx={{ marginBottom: 2 }}
                InputLabelProps={{
                    shrink: true,
                }}
            />
            <Button type="submit" variant="contained" fullWidth>
                Add Assignment
            </Button>
        </form>
    );
};

export default CreateAssignmentForm;
