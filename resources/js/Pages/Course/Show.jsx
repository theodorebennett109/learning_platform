import React, { useState } from 'react';
import MainLayout from '@/Layouts/MainLayout'; // Import MainLayout
import { Box, Typography, List, ListItem, Accordion, AccordionSummary, AccordionDetails } from '@mui/material';
import { Close as CloseIcon } from '@mui/icons-material';

const Show = () => {
  const [open, setOpen] = useState(false); // State to manage modal visibility

  // Dummy course data
  const course = {
    title: 'Web Development for Beginners',
    instructor: {
      name: 'John Brown',
      link: '/instructors/john-brown',
    },
    modules: [
      {
        title: 'Module 1: Introduction to Web Development',
        lessons: [
          'Lesson 1.1: Introduction to HTML',
          'Lesson 1.2: Introduction to CSS',
          'Lesson 1.3: Basic Web Page Structure',
        ],
        assignment: 'Assignment 1: Build a Simple Web Page (due date: 2024-12-31)',
      },
      {
        title: 'Module 2: JavaScript Basics',
        lessons: [
          'Lesson 2.1: JavaScript Syntax',
          'Lesson 2.2: Variables and Data Types',
          'Lesson 2.3: Functions and Loops',
        ],
        quiz: 'Quiz: JavaScript Basics Quiz (auto-graded)',
      },
      {
        title: 'Module 3: Building a Simple Web App',
        lessons: [
          'Lesson 3.1: Setting up a Web Server',
          'Lesson 3.2: Creating a Simple Form',
        ],
        project: 'Project: Build a Web App (due date: 2024-12-31)',
      },
    ],
    assignments: [
      'Assignment 1: Build a Simple Web Page',
      'Assignment 2: Create a Web App with JavaScript',
      'Peer Review: Review a classmate’s assignment',
    ],
    finalProject: 'Build a fully functional web app using HTML, CSS, and JavaScript. Submit by the final day of the course.',
    materials: [
      'Lecture Slides - Introduction to HTML',
      'CSS Cheat Sheet',
      'JavaScript Syntax Guide',
      'Project Template for Building a Web App',
    ],
  };

  return (
    <MainLayout>
      {/* Course Title Section */}
      <Box sx={{ textAlign: 'center', marginTop: 5 }}>
        <Typography variant="h3">{course.title}</Typography>
      </Box>

      {/* Instructor Section */}
      <Box sx={{ textAlign: 'center', marginTop: 3 }}>
        <Typography variant="h6">
          Instructor: <a href={course.instructor.link} style={{ textDecoration: 'none', color: '#1976d3' }}>
            {course.instructor.name}
          </a>
        </Typography>
      </Box>

      {/* Material Section */}
      <Box sx={{ marginTop: 5, paddingLeft: '20px' }}>
        <Typography variant="h6">Materials:</Typography>
        <List>
          {course.materials.map((material, index) => (
            <ListItem key={index}>{material}</ListItem>
          ))}
        </List>
      </Box>

      {/* Material Section for Modules */}
      <Box sx={{ marginTop: 5, paddingLeft: '20px' }}>
        <Typography variant="h6">Course Modules:</Typography>
        {course.modules.map((module, index) => (
          <Accordion key={index}>
            <AccordionSummary
              expandIcon={<AccordionSummary />}
              aria-controls={`module-${index}-content`}
              id={`module-${index}-header`}
            >
              <Typography variant="h6">{module.title}</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <List>
                {module.lessons.map((lesson, idx) => (
                  <ListItem key={idx}>{lesson}</ListItem>
                ))}
                {module.assignment && <ListItem>{module.assignment}</ListItem>}
                {module.quiz && <ListItem>{module.quiz}</ListItem>}
                {module.project && <ListItem>{module.project}</ListItem>}
              </List>
            </AccordionDetails>
          </Accordion>
        ))}
      </Box>

      {/* Assignments Section */}
      <Box sx={{ marginTop: 5, paddingLeft: '20px' }}>
        <Typography variant="h6">Assignments:</Typography>
        <List>
          {course.assignments.map((assignment, index) => (
            <ListItem key={index}>{assignment}</ListItem>
          ))}
        </List>
      </Box>

      {/* Final Project Section */}
      <Box sx={{ marginTop: 5, paddingLeft: '20px' }}>
        <Typography variant="h6">Final Project:</Typography>
        <Typography variant="body1">{course.finalProject}</Typography>
      </Box>

    </MainLayout>
  );
};

export default Show;
