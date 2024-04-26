import React from 'react';
import AppBar from '@mui/material/AppBar';
import Container from '@mui/material/Container';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { useNavigate } from 'react-router-dom';
import logoImage from './logo.jpeg';

function ResponsiveAppBar() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const navigate = useNavigate();

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/login'); // Redirect to login page
  };

  const handleInpatientClick = () => {
    navigate('/inpatient');
    handleClose();
  };

  const handleOutpatientClick = () => {
    navigate('/outpatient');
    handleClose();
  };

  return (
    <AppBar position="fixed" sx={{ top: 0, backgroundColor: 'white', marginTop: 0, marginBottom: 0 }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters style={{ justifyContent: 'space-between', padding: 0 }}>
          <IconButton edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
            <MenuIcon />
          </IconButton>
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <img src={logoImage} alt="Logo" style={{ width: '40px', marginRight: '8px' }} />
            <span style={{ fontSize: '24px', fontWeight: 'bold', fontFamily: 'YourCustomFont, sans-serif', lineHeight: '40px', marginLeft: '8px' }}>
              NutriHub
            </span>
          </div>
          <div>
            <Button color="inherit" onClick={handleClick}>
              Doctor-Consultation
            </Button>
            <Menu
              anchorEl={anchorEl}
              open={Boolean(anchorEl)}
              onClose={handleClose}
              MenuListProps={{
                'aria-labelledby': 'basic-button',
              }}
            >
              <MenuItem onClick={handleInpatientClick}>Inpatient</MenuItem>
              <MenuItem onClick={handleOutpatientClick}>Outpatient</MenuItem>
            </Menu>
            <Button color="inherit" onClick={handleLogout}>Logout</Button>
          </div>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default ResponsiveAppBar;