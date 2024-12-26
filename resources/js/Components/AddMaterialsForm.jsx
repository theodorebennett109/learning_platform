import React, { useState } from 'react';
import { TextField, Button, Box, Typography } from '@mui/material';
import { useForm } from '@inertiajs/react';
import { useDropzone } from 'react-dropzone';  // Import useDropzone from react-dropzone

const AddMaterialForm = ({ courseId }) => {
    const { data, setData, post } = useForm({
        title: '',   // The material's title
        file: null,  // The file to upload (PDF, etc.)
    });

    const [fileName, setFileName] = useState('');  // Track the name of the file selected by the user

    // Handle file drop
    const onDrop = (acceptedFiles) => {
        const file = acceptedFiles[0];  // Get the first dropped file
        setFileName(file ? file.name : '');  // Update the file name
        setData('file', file);  // Store the file in form data
    };

    // Initialize react-dropzone hook
    const { getRootProps, getInputProps } = useDropzone({
        onDrop,  // Handle dropped files
        accept: '.pdf,.docx,.xlsx,.txt,.png,.jpg,.jpeg',  // Acceptable file types
        multiple: false,  // Only one file at a time
    });

    // Handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();  // Prevent default form submission

        // Ensure a file is selected before submitting
        if (!data.file) {
            alert("Please select a file.");
            return;
        }

        // Send the form data (including file) to the backend
        post(`/courses/${courseId}/materials`, data);
    };

    return (
        <form onSubmit={handleSubmit}>
            {/* Title input */}
            <TextField
                required
                label="Material Title"
                value={data.title}
                onChange={(e) => setData('title', e.target.value)}
                sx={{ marginBottom: 2 }}
                fullWidth
            />

            {/* Drag-and-Drop file input */}
            <Box sx={{ marginBottom: 2 }}>
                <div {...getRootProps()} style={{ border: '2px dashed #1976d3', padding: '20px', borderRadius: '5px', cursor: 'pointer' }}>
                    <input {...getInputProps()} />
                    <Typography variant="body1" color="textSecondary" align="center">
                        {fileName ? `Selected File: ${fileName}` : 'Drag & Drop your file here, or click to select a file'}
                    </Typography>
                </div>
            </Box>

            {/* Submit button */}
            <Button variant="contained" type="submit" fullWidth>
                Upload Material
            </Button>
        </form>
    );
};

export default AddMaterialForm;
