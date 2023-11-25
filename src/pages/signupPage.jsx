import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Registration from '../services/registration';



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


const defaultTheme = createTheme();

export default function SignUp() {

const {myFormState, handleInputsChange, handleMysubmit} = Registration();
const {userData, setUserData} = myFormState();

  return (
    <ThemeProvider theme={defaultTheme}>
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
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign up
          </Typography>
          <Box component="form" noValidate onSubmit={handleMysubmit} sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="given-name"
                  name="first"
                  required
                  fullWidth
                  id="first"
                  value={userData.name.first}
                  onChange={handleInputsChange}
                  label="first"
                  autoFocus
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  id="last"
                  value={userData.name.last}
                  onChange={handleInputsChange}
                  label="Last Name"
                  name="lastName"
                  autoComplete="family-name"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="email"
                  onChange={handleInputsChange}
                  value={userData.email}
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="password"
                  onChange={handleInputsChange}
                  value={userData.password}
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="new-password"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="phone"
                  onChange={handleInputsChange}
                  value={userData.phone}
                  label="phone"
                  name="phone"
                  autoComplete="phone"
                />
              </Grid>
              <Typography>
                Image
              </Typography>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="url"
                  onChange={handleInputsChange}
                  value={userData.image.url}
                  label="url"
                  name="url"
                  autoComplete="url"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="alt"
                  label="alt"
                  onChange={handleInputsChange}
                  value={userData.image.alt}
                  name="alt"
                  autoComplete="alt"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="state"
                  value={userData.address.state}
                  label="state"
                  name="state"
                  onChange={handleInputsChange}
                  autoComplete="state"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="country"
                  onChange={handleInputsChange}
                  value={userData.address.country}
                  label="country"
                  name="country"
                  autoComplete="country"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="city"
                  value={userData.address.city}
                  label="city"
                  name="city"
                  onChange={handleInputsChange}
                  autoComplete="city"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="street"
                  onChange={handleInputsChange}
                  value={userData.address.street}
                  label="street"
                  name="street"
                  autoComplete="street"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="houseNumber"
                  onChange={handleInputsChange}
                  value={userData.address.houseNumber}
                  label="houseNumber"
                  name="houseNumber"
                  autoComplete="houseNumber"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="zip"
                  onChange={handleInputsChange}
                  value={userData.address.zip}
                  label="zip"
                  name="zip"
                  autoComplete="zip"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="isBusiness"
                  onChange={handleInputsChange}
                  value={userData.isBusiness}
                  label="isBusiness"
                  name="isBusiness"
                  autoComplete="isBusiness"
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
                <Link href="#" variant="body2">
                  Already have an account? Sign in
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
        <Copyright sx={{ mt: 5 }} />
      </Container>
    </ThemeProvider>
  );
}