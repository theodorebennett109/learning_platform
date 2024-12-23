import React from 'react';
import { Card, CardContent, Typography, CardActionArea } from '@mui/material';

const LinkCard = ({ name, description, link }) => {
  return (
    <Card
      sx={{

        boxShadow: 3,
        transition: 'transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out',
        '&:hover': {
          transform: 'translateY(-10px)',
          boxShadow: 8,
        },
      }}
    >
      <CardActionArea href={link} target="_blank" rel="noopener noreferrer">
        <CardContent>
          <Typography variant="h6">{name}</Typography>
          <Typography variant="body2">{description}</Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default LinkCard;
