import React, { useState, useEffect } from 'react';
import { Box, Grid, Typography } from '@mui/material';
import Logo from '../../assets/Images/logo.svg';
import { Link } from 'react-router-dom';

const Footer = () => {
  const [details, setDetails] = useState([]);

  const fetchDetails = async () => {
    const url = 'http://3.7.81.243:3253/api/settings/fetch-frontend-details';

    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error('Network response Error!!!');
      }
      const data = await response.json();
      setDetails(data?.data);
    } catch (error) {
      console.error('Error fetching Data - ', error);
    }
  };

  useEffect(() => {
    fetchDetails();
  }, []);

  return (
    <Box sx={{ backgroundColor: '#E7F1F2', padding: '20px 0' }} className='container' style={{paddingBottom : '0'}}>
      <Box className="container" sx={{ maxWidth: '1200px',margin : 'auto'}}>
        <Grid container spacing={2}>
          <Grid item xs={12} md={6} style={{borderRight : '1px solid grey'}}>
            <Typography variant="body1" sx={{ marginBottom: '8px', fontWeight: 'bold' }}>
              Tagline will go here. Lorem ipsum dolor sit amet...
            </Typography>
            <Link href={`mailto:${details?.contact_mail}`} style={{ color: '#00D5F8', textDecoration: 'none', fontSize: '20px' }}>
              {details?.contact_mail}
            </Link>
          </Grid>
          <Grid item xs={12} md={6} p={4}>
          <Grid container>
           <Grid item xs={12} md={6}>
            <Typography variant="body1" fontWeight='bold'>
              Address
            </Typography>
            <Typography variant="body2">
              {details?.address}
            </Typography>
          </Grid>
          <Grid item xs={12} md={6}>
            <Typography variant="body1" fontWeight='bold'>
              Contacts
            </Typography>
            <Link href={`mailto:${details?.contact_mail}`} style={{ color: '#00D5F8', textDecoration: 'none' }}>
              {details?.contact_mail}
            </Link>
            <Typography variant="body2">
              {details?.contact_no}
            </Typography>
          </Grid>
          </Grid>
          </Grid>
         
        </Grid>
        <Grid container justifyContent="space-between" alignItems='center' sx={{ marginTop: '20px' }}>
          <Grid item>
            <img src={Logo} alt='logo' width='135' height='60' />
          </Grid>
          <Grid item>
            <Box sx={{ display: 'flex', gap: '20px' }}>
              <Link to="/about" className='menu-item'>
                About
              </Link>
              <Link to="/blogs" className='menu-item'>
                Blogs
              </Link>
              <Link to="/contact-us" className='menu-item'>
                Contact
              </Link>
              <Link to="/services" className='menu-item'>
                Services
              </Link>
            </Box>
          </Grid>
          <Grid item>
            <Typography variant="body2" color="textSecondary">
              © 2022. All rights reserved
            </Typography>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default Footer;
