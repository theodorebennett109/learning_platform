// MainLayout.jsx
import React, { useState } from 'react';
import Navbar from '@/Components/Navbar';
import Sidebar from '@/Components/Sidebar';
import { useMediaQuery, useTheme } from '@mui/material';

const MainLayout = ({ children }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false); // State to control the sidebar visibility

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm')); // Check if screen size is small

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <div style={{ display: 'flex' }}>
      {/* Navbar */}
      <Navbar onToggleSidebar={toggleSidebar} sidebarOpen={sidebarOpen} />

      {/* Sidebar */}
      <Sidebar open={sidebarOpen} onClose={toggleSidebar} />

      {/* Main Content */}
      <main
        style={{
            width:'100%',
          marginLeft:  0, // Adjust margin based on whether the sidebar is open
          marginTop: 64, // Leave space for navbar
          padding: '20px',
          transition: 'margin-left 0.3s ease', // Smooth transition when sidebar opens/closes
        }}
      >
        {children}
      </main>
    </div>
  );
};

export default MainLayout;
