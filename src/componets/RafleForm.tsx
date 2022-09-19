import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import InputLabel from '@mui/material/InputLabel';
import Input from '@mui/material/Input';
import InputAdornment from '@mui/material/InputAdornment';

export default function MultilineTextFields() {

    return (
        <Box
            component="form"
            sx={{
                '& .MuiTextField-root': { m: 1, width: '25ch' },
            }}
            noValidate
            autoComplete="off"
        >
            <div>

                <TextField
                    id="outlined-textarea"
                    label="Nome Sorteio"
                    placeholder="Sorteio"
                    multiline
                />

                <TextField
                    id="outlined-textarea"
                    label="Participantes"
                    placeholder="Quant."
                    multiline

                />

                <TextField
                    id="outlined-multiline-static"
                    label="Descrição"
                    placeholder="Descrição Sorteio"
                    multiline
                    rows={4}
                />
            </div>
            <Button variant="contained" href="#contained-buttons">
                Criar
            </Button>
        </Box>
    );
}
