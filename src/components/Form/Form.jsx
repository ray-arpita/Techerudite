import React from 'react';
import { useFormik } from 'formik';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import MenuItem from '@mui/material/MenuItem';
import validationSchema from '../../Schema/Schema';
import './Form.css';

const API = 'http://3.7.81.243:3253/api/contact/send';

const Form = () => {
  const formik = useFormik({
    initialValues: {
      name: '',
      lastName: '',
      email: '',
      phone: '',
      budget: '',
      description: '',
    },
    validationSchema: validationSchema,
    onSubmit: async (values) => {
      try {
        const response = await fetch(API, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(values),
        });

        if (!response.ok) {
          throw new Error('Network response was not ok');
        }

        formik.resetForm();
        alert('Form submitted successfully!');
      } catch (error) {
        alert('Error submitting the form! Please try again later.');
        console.error('Error:', error);
      }
    },
  });

  return (
    <form onSubmit={formik.handleSubmit} className='container' style={{maxWidth:"600px" , margin:'auto'}}>
      <p><small>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua</small></p>
      <Box sx={{ display: 'flex', gap: 4 , marginBottom : '15px'}}>
        <TextField
          fullWidth
          id="name"
          name="name"
          label="Name"
          variant="standard" 
          value={formik.values.name}
          onChange={formik.handleChange}
          error={formik.touched.name && Boolean(formik.errors.name)}
          helperText={formik.touched.name && formik.errors.name}
        />
        <TextField
          fullWidth
          id="lastName"
          name="lastName"
          label="Last Name"
          variant="standard" 
          value={formik.values.lastName}
          onChange={formik.handleChange}
          error={formik.touched.lastName && Boolean(formik.errors.lastName)}
          helperText={formik.touched.lastName && formik.errors.lastName}
        />
      </Box>
      <Box sx={{ display: 'flex', gap: 4 , marginBottom : '15px' }}>
        <TextField
          fullWidth
          id="email"
          name="email"
          label="Email"
          variant="standard" 
          value={formik.values.email}
          onChange={formik.handleChange}
          error={formik.touched.email && Boolean(formik.errors.email)}
          helperText={formik.touched.email && formik.errors.email}
        />
        <TextField
          fullWidth
          id="phone"
          name="phone"
          label="Phone"
          variant="standard" 
          value={formik.values.phone}
          onChange={formik.handleChange}
          error={formik.touched.phone && Boolean(formik.errors.phone)}
          helperText={formik.touched.phone && formik.errors.phone}
        />
      </Box>
      <Box sx={{ display: 'flex', gap: 4 , marginBottom : '15px' }}>
        <TextField
          fullWidth
          id="budget"
          name="budget"
          label="Budget"
          variant="standard" 
          select
          value={formik.values.budget}
          onChange={formik.handleChange}
          error={formik.touched.budget && Boolean(formik.errors.budget)}
          helperText={formik.touched.budget && formik.errors.budget}
        >
          <MenuItem value="Low">Low</MenuItem>
          <MenuItem value="Medium">Medium</MenuItem>
          <MenuItem value="High">High</MenuItem>
        </TextField>
        <TextField
          fullWidth
          id="description"
          name="description"
          label="Description"
          variant="standard" 
          value={formik.values.description}
          onChange={formik.handleChange}
          error={formik.touched.description && Boolean(formik.errors.description)}
          helperText={formik.touched.description && formik.errors.description}
        />
      </Box>
      <button type="submit" className="btn-prmry" style={{marginLeft:'40%' , paddingInline:'40px' , marginTop :'25px'}}>
        <strong>Submit</strong>
      </button>
    </form>
  );
};

export default Form;
