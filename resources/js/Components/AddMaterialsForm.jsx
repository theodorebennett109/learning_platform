// AddMaterialForm.jsx
import React, { useState } from 'react';
import { TextField, Button, Select, MenuItem } from '@mui/material';
import { useForm } from '@inertiajs/react';

const AddMaterialForm = ({ courseId }) => {
    const { data, setData, post } = useForm({
        type: '',
        title: '',
        url: '',
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        post(`/courses/${courseId}/materials`, data);
    };

    return (
        <form onSubmit={handleSubmit}>
            <TextField
                required
                label="Material Title"
                value={data.title}
                onChange={(e) => setData('title', e.target.value)}
            />
            <Select
                required
                value={data.type}
                onChange={(e) => setData('type', e.target.value)}
            >
                <MenuItem value="pdf">PDF</MenuItem>
                <MenuItem value="spreadsheet">Spreadsheet</MenuItem>
                <MenuItem value="link">Link</MenuItem>
            </Select>
            <TextField
                required
                label="URL"
                value={data.url}
                onChange={(e) => setData('url', e.target.value)}
            />
            <Button type="submit">Add Material</Button>
        </form>
    );
};

export default AddMaterialForm;
