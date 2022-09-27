import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import { useState, useEffect } from "react";

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
        topMargin:10
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

function sortear(idRaffle: any){
     console.log(idRaffle)
}

export default function CustomizedTables() {
    

    const [result, setResult] = useState<resultProps[]>([]);

    useEffect(() => {
        const apiGetRaffles = async () => {
            const data = await fetch("http://localhost:8080/raffle/all", {
                method: "GET"
            });
            const jsonData = await data.json();
            setResult(jsonData);
        };
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
                            <StyledTableCell align="center">Nº Sorteado</StyledTableCell>
                            <StyledTableCell align="center">Data sorteio</StyledTableCell>
                            <StyledTableCell align="center">Descrição</StyledTableCell>
                            <StyledTableCell align="center">Ações</StyledTableCell>
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
                                <StyledTableCell align="center"><Button variant="outlined" color="error" onClick={() => sortear(row.idRaffle)} >Sortear</Button>
                                </StyledTableCell>
                            </StyledTableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    );
}
