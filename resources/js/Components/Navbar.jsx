import React, { useState } from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Box,
  useMediaQuery,
  useTheme,
  Menu,
  MenuItem,
} from '@mui/material';
import { Close, Menu as MenuIcon, AccountCircle, School } from '@mui/icons-material'; // Hamburger Menu and Person Icon

const Navbar = ({ onToggleSidebar, sidebarOpen }) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm')); // Check if screen size is small
  const [anchorEl, setAnchorEl] = useState(null); // State for dropdown menu
  const [openMenu, setOpenMenu] = useState(false);

  // Handle opening of the dropdown menu
  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
    setOpenMenu(true);
  };

  // Handle closing of the dropdown menu
  const handleMenuClose = () => {
    setAnchorEl(null);
    setOpenMenu(false);
  };

  return (
    <AppBar position="fixed" style={{ zIndex: 10000 }}>
      <Toolbar>
        {/* Hamburger icon for toggling sidebar on small screens */}
        {isMobile && (
          <IconButton
            color="inherit"
            aria-label="open sidebar"
            edge="start"
            onClick={onToggleSidebar}
            sx={{ marginRight: 2 }}
          >
            {sidebarOpen ? <Close /> : <MenuIcon />}
          </IconButton>
        )}

        {/* Box to contain logo and title */}
        <Box sx={{ display: 'flex', alignItems: 'center', flexGrow: 1 }}>
          {/* JUTC Logo */}
          <School style={{ height: '56px', marginRight: '10px' }} />

          {/* Navbar Title */}
          <Typography variant="h6" noWrap>
          CourseMaster
          </Typography>
        </Box>

        {/* Person Icon and Account Dropdown */}
        <IconButton
          color="inherit"
          onClick={handleMenuOpen} // Open the dropdown menu when clicked
          sx={{ marginLeft: 'auto' }} // Push the icon to the right side
        >
          <AccountCircle />
        </IconButton>

        {/* Menu for Account Options (Profile, Logout, etc.) */}
        <Menu
          anchorEl={anchorEl}
          open={openMenu}
          onClose={handleMenuClose} // Close the menu
          MenuListProps={{
            'aria-labelledby': 'basic-button',
          }}
        >
          <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
          <MenuItem onClick={handleMenuClose}>Logout</MenuItem>
        </Menu>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
