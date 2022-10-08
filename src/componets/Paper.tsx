import * as React from 'react';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import { createTheme, ThemeProvider, styled } from '@mui/material/styles';

const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    textAlign: 'center',
    color: theme.palette.text.secondary,
    height: 60,
    lineHeight: '60px',
}));


const lightTheme = createTheme({ palette: { mode: 'light' } });

type resultProps = {
    name: string
    idRaffle: number
    RaffleName: string
    RaffleParticipants: number
    RaffleUserDrawn: number
    date: string
    description: string
    email: string
};

export default function Elevation(args: any) {
    
    const [result, setResult] = React.useState<resultProps[]>([]);
    console.log(args.props.user)
    React.useEffect(() => {

        const apiGetRaffles = async () => {
            const data = await fetch(`https://good-luck-app-back-end.herokuapp.com/users/profile/${args.props.user}`, {
                method: "GET"
            });
            const jsonData = await data.json();
            setResult(jsonData);
        };
        if(result){
            apiGetRaffles();
        }
        apiGetRaffles();
    }, []);

console.log(result)
    return (
        <Grid container spacing={2}>
            {[lightTheme].map((theme, index) => (
                <Grid item xs={6} key={index}>
                    <ThemeProvider theme={theme}>
                        <Box
                            sx={{
                                p: 2,
                                bgcolor: 'background.default',
                                display: 'grid',
                                gridTemplateColumns: { md: '1fr 1fr' },
                                gap: 2,
                            }}
                        >
                            <Item >
                                {`Nome= ${result[0]?.name}`}
                            </Item>
                            <Item >
                                {`Email= ${result[0]?.email}`}
                            </Item>
                            <Item >
                                {`Data Cadastro= 08/10/2022`}
                            </Item>

                        </Box>
                    </ThemeProvider>
                </Grid>
            ))}
        </Grid>
    );
}
