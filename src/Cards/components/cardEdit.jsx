import cardEditLogic from "../EditCard"
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
import UpdateOutlinedIcon from '@mui/icons-material/UpdateOutlined';



    
    const defaultTheme = createTheme();

    const CardEditPage = () => {
    
       const {currInput, handleEditCardInputs, handleEditSubmit} = cardEditLogic();
    
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
              <Avatar sx={{ m: 1, bgcolor: 'black' }}>
                <UpdateOutlinedIcon />
              </Avatar>
              <Typography component="h1" variant="h5">
                Update Your card
              </Typography>
              <Box component="form" onSubmit={handleEditSubmit} noValidate sx={{ mt: 1 }}>
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  id="title"
                  value={currInput.title}
                  onChange={handleEditCardInputs}
                  label="title"
                  name="title"
                  autoComplete="title"
                  autoFocus
                />
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  name="subtitle"
                  label="subtitle"
                  type="subtitle"
                  id="subtitle"
                  value={currInput.subtitle}
                  onChange={handleEditCardInputs}
                  autoComplete="subtitle"
                />
                 <TextField
                  margin="normal"
                  required
                  fullWidth
                  name="description"
                  label="description"
                  type="description"
                  id="description"
                  value={currInput.description}
                  onChange={handleEditCardInputs}
                  autoComplete="description"
                />
                 <TextField
                  margin="normal"
                  required
                  fullWidth
                  name="phone"
                  label="phone"
                  type="phone"
                  id="phone"
                  value={currInput.phone}
                  onChange={handleEditCardInputs}
                  autoComplete="phone"
                />
                 <TextField
                  margin="normal"
                  required
                  fullWidth
                  name="email"
                  label="email"
                  type="email"
                  id="email"
                  value={currInput.email}
                  onChange={handleEditCardInputs}
                  autoComplete="email"
                />
                 <TextField
                  margin="normal"
                  fullWidth
                  name="web"
                  label="web"
                  type="web"
                  id="web"
                  value={currInput.web}
                  onChange={handleEditCardInputs}
                  autoComplete="web"
                />
                 <TextField
                  margin="normal"
                  required
                  fullWidth
                  name="url"
                  label="url"
                  type="url"
                  id="url"
                  value={currInput.url}
                  onChange={handleEditCardInputs}
                  autoComplete="url"
                />
                 <TextField
                  margin="normal"
                  required
                  fullWidth
                  name="alt"
                  label="alt"
                  type="alt"
                  id="alt"
                  value={currInput.alt}
                  onChange={handleEditCardInputs}
                  autoComplete="alt"
                />
                 <TextField
                  margin="normal"
                  required
                  fullWidth
                  name="state"
                  label="state"
                  type="state"
                  id="state"
                  value={currInput.state}
                  onChange={handleEditCardInputs}
                  autoComplete="state"
                />
                 <TextField
                  margin="normal"
                  required
                  fullWidth
                  name="country"
                  label="country"
                  type="country"
                  id="country"
                  value={currInput.country}
                  onChange={handleEditCardInputs}
                  autoComplete="country"
                />
                 <TextField
                  margin="normal"
                  required
                  fullWidth
                  name="city"
                  label="city"
                  type="city"
                  id="city"
                  value={currInput.city}
                  onChange={handleEditCardInputs}
                  autoComplete="city"
                />
                 <TextField
                  margin="normal"
                  required
                  fullWidth
                  name="street"
                  label="street"
                  type="street"
                  id="street"
                  value={currInput.street}
                  onChange={handleEditCardInputs}
                  autoComplete="street"
                />
                 <TextField
                  margin="normal"
                  required
                  fullWidth
                  name="houseNumber"
                  label="houseNumber"
                  type="houseNumber"
                  id="houseNumber"
                  value={currInput.houseNumber}
                  onChange={handleEditCardInputs}
                  autoComplete="houseNumber"
                />
                 <TextField
                  margin="normal"
                  fullWidth
                  name="zip"
                  label="zip"
                  type="zip"
                  id="zip"
                  value={currInput.zip}
                  onChange={handleEditCardInputs}
                  autoComplete="zip"
                />
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  sx={{ mt: 3, mb: 2 }}
                >
                  Update card
                </Button>
                <Grid container>
                  <Grid item xs>
                  </Grid>
                </Grid>
              </Box>
            </Box>
          </Container>
        </ThemeProvider>
      );
    }
    
    export default CardEditPage;