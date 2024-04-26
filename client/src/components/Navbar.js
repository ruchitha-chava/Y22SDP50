import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import { Link, useNavigate } from 'react-router-dom';
import logoImage from './logo.jpeg'; // Ensure this path is correct

const services = ['Hospitals', 'Doctor-Consultation', 'Homecare', 'Medicines', 'Health-Information', 'Contact-Us'];

function ResponsiveAppBar() {
 const [anchorElNav, setAnchorElNav] = React.useState(null);
 const [anchorElUser, setAnchorElUser] = React.useState(null);
 const [anchorElConsultation, setAnchorElConsultation] = React.useState(null); 

 const navigate = useNavigate(); // Initialize useNavigate hook

 const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
 };
 const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
 };
 const handleOpenConsultationMenu = (event) => { 
    setAnchorElConsultation(event.currentTarget);
 };
 const handleCloseNavMenu = () => {
    setAnchorElNav(null);
 };
 const handleCloseUserMenu = () => {
    setAnchorElUser(null);
 };
 const handleCloseConsultationMenu = () => { 
    setAnchorElConsultation(null);
 };

 const handleLogout = () => {
    window.location.href = 'http://localhost:3000/';
 };

 const handleInpatientClick = () => { // Function to handle Inpatient menu item click
    navigate('/inpatient');
    handleCloseConsultationMenu();
 };

 const handleOutpatientClick = () => { // Function to handle Outpatient menu item click
    navigate('/outpatient');
    handleCloseConsultationMenu();
 };

 return (
    <AppBar position="fixed" sx={{ backgroundColor: '#e6e6fa' }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Box sx={{ flexGrow: 1, display: 'flex', alignItems: 'center' }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
              sx={{
                display: { xs: 'flex', md: 'none' },
              }}
            >
              <MenuIcon />
            </IconButton>
            <img
              src={logoImage}
              alt="Logo"
              style={{ height: '40px', marginLeft: '8px' }}
              sx={{
                display: { xs: 'flex', md: 'none' },
              }}
            />
          </Box>

          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {services.map((service) => (
              service === 'Doctor-Consultation' ? (
                <Button
                 key={service}
                 aria-controls="consultation-menu"
                 aria-haspopup="true"
                 onClick={handleOpenConsultationMenu}
                 sx={{ my: 2, color: 'black', display: 'block' }}
                >
                 {service}
                </Button>
              ) : (
                <Button
  key={service}
  onClick={handleCloseNavMenu}
  component={Link}
  to={`/${service.toLowerCase().replace(/\s+/g, '-')}`}
  sx={{ my: 2, color: 'black', display: 'block' }}
>
  {service}
</Button>

              )
            ))}
        </Box>
          <Menu
            id="consultation-menu"
            anchorEl={anchorElConsultation}
            open={Boolean(anchorElConsultation)}
            onClose={handleCloseConsultationMenu}
            MenuListProps={{
              'aria-labelledby': 'consultation-button',
            }}
          >
            <MenuItem onClick={handleInpatientClick}>Inpatient</MenuItem>
            <MenuItem onClick={handleOutpatientClick}>Outpatient</MenuItem>
          </Menu>

          <Box>
            <Button color="inherit" onClick={handleLogout} style={{ color: 'black' }}>Logout</Button>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
 );
}

export default ResponsiveAppBar;