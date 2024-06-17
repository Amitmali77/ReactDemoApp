import React, { useEffect, useState } from 'react';
import { useFormik } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import * as yup from 'yup';
import { Container, Typography, TextField, Button, Grid } from '@mui/material';
import { fetchLogin } from '../store/reducers/authentications/authThunk';
import { useNavigate } from 'react-router-dom';

const LoginPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const auth = useSelector((state) => state.authentication.auth)
console.log('auth', auth)
  useEffect(() => {
    console.log('auth1', auth)
    if(auth.token){
      navigate('/')
    }
  }, [auth])
  
  const handleLogin = (payload) => {
    dispatch(fetchLogin(payload))
    
    // Handle login logic here (e.g., authentication, API calls, etc.)
    // console.log(`Logging in with username: ${username} and password: ${password}`);
  };

  const formik = useFormik({
    initialValues: {
      username: '',
      password: ''
    },
    validationSchema: yup.object({
        username: yup
          .string()
          //.email('Email is Invalid')
          .min(4, 'invalid user name')
          .required('This Field is Required')
          .max(254, 'Max email char 254 allowed'),
        password: yup
          .string()
          .min(6,'Minimum 6 chars required')
          .required('This Field is Required'),
      }),
    onSubmit: values => {
      // alert(JSON.stringify(values, null, 2));
      handleLogin(values)
    },
  });

  const {
    handleSubmit,
    handleChange,
    values: {
       username,
       password 
    },
    errors: {
        username: err_username,
        password : err_password
    },

} = formik

  return (
    <Container maxWidth="xs">
      <form onSubmit={handleSubmit} style={{ marginTop: '50px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <Typography variant="h4" gutterBottom>
          Login
        </Typography>
        <TextField
          label="Username"
          variant="outlined"
          margin="normal"
          fullWidth
          name='username'
          value={username}
          onChange={handleChange}
          InputLabelProps={{ shrink: true }}
          sx={{ width: '450px' }}
          helperText={err_username}
          error={!!err_username}
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
      <div>
      username: 'emilys',
      password: 'emilyspass',
      </div>
    </Container>
  );
};

export default LoginPage;
