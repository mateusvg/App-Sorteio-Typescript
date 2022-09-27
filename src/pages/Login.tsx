import React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useNavigate } from "react-router-dom";


function Copyright(props: any) {
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

export default function SignIn(props: any) {

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);


      const uri2 = 'https://good-luck-app-back-end.herokuapp.com/users/auth';

      const postUser = async () => {
        try {
          const resp = await fetch(uri2, {
            method: 'POST',
            headers: {
              Accept: 'application/json',
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({ username: data.get('email'), password: data.get('password') }),
          })
          if (!resp.ok) {
            throw new Error(`Error! status: ${resp.status}`);
          }
          const result = await resp.json();
          if(result.message === 'Incorrect Username and/or Password!'){
            console.log('Usuário não validado')
            return false
          }else{
            console.log('Usuário validado')
            return handleClickHome()
          }
        } catch (err) {
          console.log(err);
        }
      }
       postUser()
  };




  const navigate = useNavigate();

  function handleClickHome() {
    props.setAuth(true)
    navigate("/home");
  }

  function handleClickRegister() {
    props.toggleShow(false)
    navigate("/register");
  }


  return (
    <ThemeProvider theme={theme}>
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
          <Avatar sx={{ m: 1 }}>
            🍀
          </Avatar>
          <Typography component="h1" variant="h5">
            Good Luck
          </Typography>
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="E-mail"
              name="email"
              autoComplete="email"
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Senha"
              type="password"
              id="password"
              autoComplete="current-password"
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Lembrar-me"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}

            >
              Login
            </Button>
            <Grid container>
              <Grid item xs>
                <Link href="#" variant="body2">
                  Esqueceu sua senha?
                </Link>
              </Grid>
              <Grid item>
                <Link href="#" variant="body2" onClick={handleClickRegister}>
                  {"Não possui uma conta? Cadastra"}
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
        <Copyright sx={{ mt: 8, mb: 4 }} />
      </Container>
    </ThemeProvider>
  );
}