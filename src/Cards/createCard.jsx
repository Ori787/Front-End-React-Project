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
import AddBusinessRoundedIcon from '@mui/icons-material/AddBusinessRounded';
import Copyright from './components/newCardCopyright';
import NewCard from './newCard';

const defaultTheme = createTheme();

 const CreateNewCard = () => {

  const { cardInput, handleNewCardInputs, handleCardSubmit } = NewCard();

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
            <AddBusinessRoundedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Create a new card
          </Typography>
          <Box component="form" onSubmit={handleCardSubmit} noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="title"
              value={cardInput.title}
              onChange={handleNewCardInputs}
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
              value={cardInput.subtitle}
              onChange={handleNewCardInputs}
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
              value={cardInput.description}
              onChange={handleNewCardInputs}
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
              value={cardInput.phone}
              onChange={handleNewCardInputs}
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
              value={cardInput.email}
              onChange={handleNewCardInputs}
              autoComplete="email"
            />
             <TextField
              margin="normal"
              fullWidth
              name="web"
              label="web"
              type="web"
              id="web"
              value={cardInput.web}
              onChange={handleNewCardInputs}
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
              value={cardInput.url}
              onChange={handleNewCardInputs}
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
              value={cardInput.alt}
              onChange={handleNewCardInputs}
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
              value={cardInput.state}
              onChange={handleNewCardInputs}
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
              value={cardInput.country}
              onChange={handleNewCardInputs}
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
              value={cardInput.city}
              onChange={handleNewCardInputs}
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
              value={cardInput.street}
              onChange={handleNewCardInputs}
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
              value={cardInput.houseNumber}
              onChange={handleNewCardInputs}
              autoComplete="houseNumber"
            />
             <TextField
              margin="normal"
              fullWidth
              name="zip"
              label="zip"
              type="zip"
              id="zip"
              value={cardInput.zip}
              onChange={handleNewCardInputs}
              autoComplete="zip"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Create a new card
            </Button>
            <Grid container>
              <Grid item xs>
              </Grid>
            </Grid>
          </Box>
        </Box>
        <Copyright sx={{ mt: 8, mb: 4 }} />
      </Container>
    </ThemeProvider>
  );
}

export default CreateNewCard;