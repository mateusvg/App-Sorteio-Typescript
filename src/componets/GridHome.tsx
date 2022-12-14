import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { useState, useEffect } from "react";
import Dialog from './Dialog'

type resultProps = {
    name: string
    idRaffle: number
    RaffleName: string
    RaffleParticipants: number
    RaffleUserDrawn: number
    date: string
    description: string
};


const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
        backgroundColor: theme.palette.common.white,
        color: theme.palette.common.black,
        topMargin: 10
    },
    [`&.${tableCellClasses.body}`]: {
        fontSize: 14,
    },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    '&:last-child td, &:last-child th': {
        border: 0,
    },
}));


export default function CustomizedTables(idRaffle: any, RaffleParticipants: any) {

    const [result, setResult] = useState<resultProps[]>([]);

    useEffect(() => {

        const apiGetRaffles = async () => {
            const data = await fetch("https://good-luck-app-back-end.herokuapp.com/raffle/all", {
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
    
    return (
        <div className="Home">

            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 700 }} aria-label="customized table">
                    <TableHead>
                        <TableRow>
                            <StyledTableCell align="center">Id</StyledTableCell>
                            <StyledTableCell align="center">Titulo</StyledTableCell>
                            <StyledTableCell align="center">Quantidade Participantes</StyledTableCell>
                            <StyledTableCell align="center">N?? Sorteado</StyledTableCell>
                            <StyledTableCell align="center">Data sorteio</StyledTableCell>
                            <StyledTableCell align="center">Descri????o</StyledTableCell>
                            <StyledTableCell align="center">A????es</StyledTableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {result?.map((row) => (
                            <StyledTableRow>
                                <StyledTableCell align="center">{row.idRaffle}</StyledTableCell>
                                <StyledTableCell align="center">{row.RaffleName}</StyledTableCell>
                                <StyledTableCell align="center">{row.RaffleParticipants}</StyledTableCell>
                                <StyledTableCell align="center">{row.RaffleUserDrawn}</StyledTableCell>
                                <StyledTableCell align="center">{row.date}</StyledTableCell>
                                <StyledTableCell align="center">{row.description}</StyledTableCell>
                                {/*<StyledTableCell align="center"><Button variant="outlined" color="error" onClick={() => sortear(row.idRaffle, row.RaffleParticipants )} >Sortear</Button>
                                </StyledTableCell>*/}
                                <StyledTableCell align="center">{result && <Dialog idRaffle={row.idRaffle} RaffleParticipants={row.RaffleParticipants} />}</StyledTableCell>
                            </StyledTableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    );
}
