import React, { useState } from 'react';
import { useFormik } from 'formik';
import * as yup from 'yup'
import { Container, Typography, TextField, Button, Grid } from '@mui/material';

const LoginPage = () => {

  const handleLogin = () => {
    // Handle login logic here (e.g., authentication, API calls, etc.)
    // console.log(`Logging in with username: ${username} and password: ${password}`);
  };

  const formik = useFormik({
    initialValues: {
      email: '',
      password: ''
    },
    validationSchema: yup.object({
        email: yup
          .string()
          .email('Email is Invalid')
          .required('This Field is Required')
          .max(254, 'Max email char 254 allowed'),
        password: yup
          .string()
          .min(6,'Minimum 6 chars required')
          .required('This Field is Required'),
      }),
    onSubmit: values => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  const {
    handleSubmit,
    handleChange,
    values: {
       email,
       password 
    },
    errors: {
        email: err_email,
        password : err_password
    },

} = formik

  return (
    <Container maxWidth="xs">
      <form onSubmit={handleSubmit} style={{ marginTop: '100px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <Typography variant="h4" gutterBottom>
          Login
        </Typography>
        <TextField
          label="Username"
          variant="outlined"
          margin="normal"
          fullWidth
          name='email'
          value={email}
          onChange={handleChange}
          InputLabelProps={{ shrink: true }}
          sx={{ width: '450px' }}
          helperText={err_email}
          error={!!err_email}
        />
        <TextField
          label="Password"
          variant="outlined"
          margin="normal"
          fullWidth
          type="password"
          name='password'
          value={password}
          onChange={handleChange}
          InputLabelProps={{ shrink: true }}
          sx={{ width: '450px' }}
          helperText={err_password}
          error={!!err_password}
        />
        <Button variant="contained" color="primary" style={{ marginTop: '20px', width:"450px", height:'50px' }} type='submit'>
          Login
        </Button>
      </form>
    </Container>
  );
};

export default LoginPage;
