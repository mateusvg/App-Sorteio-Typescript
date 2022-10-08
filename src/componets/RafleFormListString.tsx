import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

import { Dayjs } from 'dayjs';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';


export default function MultilineTextFields(props: any) {
    const [value, setValue] = React.useState<Dayjs | null>(null);
    const [nomeSorteio, setNomeSorteio] = React.useState('');
    const [participantes, setParticipantes] = React.useState('');
    const [descricao, setDescricao] = React.useState('');

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        const uri2 = 'http://localhost:8080/raffle/create';
        const postRafle = async () => {
            try {
                const resp = await fetch(uri2, {
                    method: 'POST',
                    headers: {
                        Accept: 'application/json',
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({ nomeSorteio: data.get('nomeSorteio'), participantes: data.get('participantes'), data: `${value}`, description: data.get('description') }),
                })
                if (resp.ok) {
                    console.log("Sorteio criado")
                }

            } catch (err) {
                console.log(err);
            }
        }
        postRafle()
        event.preventDefault()
        setNomeSorteio('')
        setParticipantes('')
        setValue(null)
        setDescricao('')

    };


    return (
        <Box
            component="form"
            sx={{
                '& .MuiTextField-root': { m: 1, width: '25ch' },
            }}
            noValidate
            autoComplete="off"
            onSubmit={handleSubmit}
        >
            <div>

                <TextField
                    id="outlined-textarea"
                    label="Nome Sorteio"
                    name="nomeSorteio"
                    placeholder="Sorteio"
                    multiline
                    onChange={event => setNomeSorteio(event.target.value)}
                    value={nomeSorteio}
                />

                <TextField
                    id="outlined-multiline-static"
                    label="Participantes/ Lista"
                    name="participantes"
                    placeholder="Adicione aqui sua lista"
                    multiline
                    rows={4}
                    onChange={event => setParticipantes(event.target.value)}
                    value={participantes}
                />

                <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DatePicker
                        label="Data Sorteio"
                        value={value}
                        onChange={(newValue) => {
                            setValue(newValue);
                        }}
                        renderInput={(params) => <TextField {...params} />}
                    />
                </LocalizationProvider>

                <TextField
                    id="outlined-multiline-static"
                    label="Descrição"
                    name="description"
                    placeholder="Descrição Sorteio"
                    multiline
                    rows={4}
                    onChange={event => setDescricao(event.target.value)}
                    value={descricao}
                />
            </div>
            <Button type="submit" variant="contained">
                Criar
            </Button>
        </Box>
    );
}
