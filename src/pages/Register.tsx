import * as  React from 'react';
import { useState } from 'react'
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useNavigate } from "react-router-dom";


const theme = createTheme();

export default function SignIn(props: any) {
    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        const uri2 = 'https://good-luck-app-back-end.herokuapp.com/user/create';
        const postUser = async () => {
            const resp = await fetch(uri2, {
                method: 'POST',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ username: data.get('email'), password: data.get('password'), name: data.get('name') }),
            })
            if (resp.ok) {
                return handleClickHome()
            } else{
                return setRenderResult(true)
            }
        }
        postUser()
    };

    const navigate = useNavigate();

    function handleClickHome() {
        props.toggleShow(true)
        navigate("/home");
    }

    const [renderResult, setRenderResult] = useState(false)

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
                            id="name"
                            label="Nome"
                            name="name"
                            autoComplete="name"
                            autoFocus
                        />
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            id="email"
                            label="E-mail"
                            name="email"
                            autoComplete="email"
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
                        <label>  TIPO DE CONTA:</label>
                        <FormControlLabel
                            control={<Checkbox value="remember" color="primary" />}
                            label="Admin"
                        />
                        <FormControlLabel
                            control={<Checkbox value="remember" color="primary" />}
                            label="Usuario"
                        />
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            sx={{ mt: 3, mb: 2 }}>
                            Cadastrar
                        </Button>
                        {renderResult == true ? <div>Usuário ja cadastrado. Tente outro e-mail!</div>: null }
                    </Box>
                </Box>
            </Container>
        </ThemeProvider>
    );
}