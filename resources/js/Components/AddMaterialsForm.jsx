import React, { useState } from 'react';
import { TextField, Button, Box, Typography } from '@mui/material';
import { useForm } from '@inertiajs/react';
import { useDropzone } from 'react-dropzone';

const AddMaterialForm = ({ courseId, onCloseModal }) => {
    const { data, setData, post } = useForm({
        title: '',
        file: null,
    });

    const [fileName, setFileName] = useState('');

    const onDrop = (acceptedFiles) => {
        const file = acceptedFiles[0];
        setFileName(file ? file.name : '');
        setData('file', file);
    };

    const { getRootProps, getInputProps } = useDropzone({
        onDrop,
        accept: '.pdf,.docx,.xlsx,.txt,.png,.jpg,.jpeg',
        multiple: false,
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!data.file) {
            alert('Please select a file.');
            return;
        }
        post(`/courses/${courseId}/materials`, {
            onSuccess: () => {
                if (onCloseModal) onCloseModal();  // Close the modal after success
            },
        });
    };

    return (
        <form onSubmit={handleSubmit}>
            <TextField
                required
                label="Material Title"
                value={data.title}
                onChange={(e) => setData('title', e.target.value)}
                sx={{ marginBottom: 2 }}
                fullWidth
            />
            <Box sx={{ marginBottom: 2 }}>
                <div
                    {...getRootProps()}
                    style={{
                        border: '2px dashed #1976d3',
                        padding: '20px',
                        borderRadius: '5px',
                        cursor: 'pointer',
                    }}
                >
                    <input {...getInputProps()} />
                    <Typography variant="body1" align="center">
                        {fileName || 'Drag & Drop your file here, or click to select one.'}
                    </Typography>
                </div>
            </Box>
            <Button variant="contained" type="submit" fullWidth>
                Upload Material
            </Button>
        </form>
    );
};

export default AddMaterialForm;
