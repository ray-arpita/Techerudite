import React from 'react'
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Logo from '../../assets/Images/logo.svg';
import {Link} from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  return (
    <>
        <Box className='navbar' style={{background: 'transparent' }}>
          <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          <Link to ='/' >
              <img src={Logo} alt="Logo" style={{ height: '40px' }} />
              </Link>
            </Typography>
            <Box sx={{ display: 'flex', gap: 2 , justifyContent : 'center' , alignItems : 'center'}}>
              <Link to ='/services' className='menu-item'>
              Services
              </Link>
              <Link to ='/about' className='menu-item' >
              About Us
              </Link>
              <Link to ='/blogs' className='menu-item' >
              Blogs
              </Link>
              <Link to ='/case-studies' className='menu-item' >
              Case Studies
              </Link>
              <Link to ='/contact-us' >
              <button className='btn-prmry'>CONTACT US</button>
              </Link>
            </Box>
          </Toolbar>
        </Box>
    </>
  )
}

export default Navbar
