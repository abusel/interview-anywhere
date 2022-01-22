

import * as React from 'react';
import { useState } from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
//import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useHistory } from 'react-router-dom'
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';

function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const theme = createTheme();

export default function SignUp(
  {setUser}
) {
  const [isCompany, setIsCompany] = useState(false)
  const [password, setPassword] = useState('')
  const [errors, setErrors] = useState([])

   let history = useHistory()

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    // eslint-disable-next-line no-console
    const form = JSON.stringify({
      name: data.get('firstName') + ' ' + data.get('lastName'),
      email: data.get('email'),
      password: password,
      is_company: isCompany
    });
    console.log(form)
    fetch("/api/signup", {
      method: "POST",
      headers: {
          "Content-Type" : "application/json"
      },
      body: form
    })
    .then((r) => {
        if (r.ok) {
          r.json().then((user) => {
             setUser(user)
             history.push('/')
          console.log(user)})
        } else {
          r.json().then((err) => setErrors(err.errors));
        }
      });
  };

  return (
    <div style={{justifyContent: 'center'}}>
    <ThemeProvider theme={theme} >
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            {/* <LockOutlinedIcon /> */}
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign up
          </Typography>
          <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField variant='filled' sx={{ bgcolor: 'white'}} 
                  autoComplete="given-name"
                  name="firstName"
                  required
                  fullWidth
                  id="firstName"
                  label="First Name"
                  autoFocus
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField variant='filled' sx={{ bgcolor: 'white'}} 
                  required
                  fullWidth
                  id="lastName"
                  label="Last Name"
                  name="lastName"
                  autoComplete="family-name"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField variant='filled' sx={{ bgcolor: 'white'}} 
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField variant='filled' sx={{ bgcolor: 'white'}} 
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  value={password}
                  onChange={(e)=> setPassword(e.target.value)}
                  autoComplete="new-password"
                />
              </Grid>
              <Grid item xs={12}>
                <FormControlLabel
                  control={<Checkbox value="isCompany" id="isCompany" color="primary" onChange={()=> setIsCompany((isCompany)=> !isCompany)}/>}
                  label="I am a company"
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign Up
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link href="/login" variant="body2">
                  Already have an account? Sign in
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
        <Copyright sx={{ mt: 5 }} />
      </Container>

      {
        errors[0] && <div    style={{
            position: "absolute",
            bottom: "10",
            left: "50%",
            transform: "translateX(-50%)"
          }}> <Stack  sx={{ width: '20vw' }} spacing={2}>
        {errors.map(err => {
          return  <Alert severity="error">{err}</Alert>
        })}
        </Stack>
        </div>
      }
    </ThemeProvider>
    </div>
  );
}