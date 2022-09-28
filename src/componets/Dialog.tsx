import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { useState } from "react";

export default function AlertDialog(args: any) {
  const [open, setOpen] = useState(false);

  //Sorteio
  const [sorteio, setSorteio] = useState(0);
  const sortear =  () => {
    const rndInt = Math.floor(Math.random() * args.RaffleParticipants) + 1
    setSorteio(rndInt)
  }
  //Api Update
  const apiUpdateRaffle = async () => {
    await fetch(`http://localhost:8080/raffle/raffle/${args.idRaffle}`, {
      method: "PUT",
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        idRafle: args.idRaffle,
        numeroSorteado: `${sorteio}`
      }),
    });
  };

  const handleClickOpen = () => {
    setOpen(true);
    apiUpdateRaffle()
    sortear()
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button variant="outlined" onClick={handleClickOpen}>
        Sortear
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"Sorteio realizado"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Numero sorteado: {sorteio}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Fechar</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
