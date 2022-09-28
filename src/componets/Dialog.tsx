import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

export default function AlertDialog(args: any ) {
  const [open, setOpen] = React.useState(false);

  //Sorteio
  const rndInt = Math.floor(Math.random() * args.RaffleParticipants) + 1
  console.log(rndInt)

  const handleClickOpen = () => {
    setOpen(true);
        console.log(args.idRaffle)
        console.log(args.RaffleParticipants)
        const apiUpdateRaffle = async () => {
            await fetch(`http://localhost:8080/raffle/raffle/${args.idRaffle}`, {
                method: "PUT"
            });
        };
        apiUpdateRaffle()
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
            Numero sortetado: {rndInt}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Fechar</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
