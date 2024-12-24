import React from 'react';
import {
  Drawer,
  List,
  ListItem,
  ListItemText,
  IconButton,
  useMediaQuery,
  Toolbar,
} from '@mui/material';
import { Home, CreditCard, ExitToApp, Close, DirectionsBus, AutoStories, Person } from '@mui/icons-material'; // Import DirectionsBus icon
import { useTheme } from '@mui/material/styles';
import { Link } from '@inertiajs/react';

const Sidebar = ({ open, onClose }) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm')); // Check if the screen is small

  // Sidebar items as an array of objects for easier management
  const sidebarItems = [
    {
      text: 'Home',
      icon: <Home />,
      href: '/',
    },
    {
      text: 'Courses',
      icon: <AutoStories />,
      href: '/courses',
    },
    {
      text: 'Lecturers',
      icon: <Person />,
      href: '/lecturers',
    },
    {
      text: 'Logout',
      icon: <ExitToApp />,
      href: '/logout',
    },
  ];

  return (
    <div>
      {/* Sidebar Drawer */}
      <Drawer
        sx={{
          width: 240,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: 240,
            boxSizing: 'border-box',
            zIndex: 1200, // Ensure it overlays over the content
            backgroundColor: 'black',
            color: 'white',
          },
        }}
        variant={isMobile ? 'temporary' : 'permanent'} // Temporary for mobile
        anchor="left"
        open={open}
        onClose={onClose} // Close sidebar on mobile when clicked outside
        ModalProps={{
          keepMounted: true, // For better performance on mobile
        }}
      >
        <Toolbar>
          {isMobile && (
            <IconButton
              color="inherit"
              aria-label="close sidebar"
              edge="start"
              onClick={onClose}
              sx={{ marginLeft: 'auto' }}
            >
              <Close />
            </IconButton>
          )}
        </Toolbar>

        {/* Sidebar links list */}
        <List>
          {sidebarItems.map((item, index) => (
            <Link
              key={index}
              href={item.href} // Use Inertia's Link component for navigation
              style={{ textDecoration: 'none', color: 'inherit' }} // Ensure the styles from MUI apply
            >
              <ListItem
                button
                sx={{
                  '&:hover': {
                    backgroundColor: '#1976d3', // Hover background color
                  },
                }}
              >
                {item.icon}
                <ListItemText primary={item.text} style={{marginLeft:'6px'}} />
              </ListItem>
            </Link>
          ))}
        </List>
      </Drawer>
    </div>
  );
};

export default Sidebar;
