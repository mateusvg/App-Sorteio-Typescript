import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';


export default function BasicCard(args: any) {
  return (
    <Card sx={{ minWidth: 275 }}>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
        {args.tituloCard}
        </Typography>
        <Typography variant="h5" component="div">
          {args.quantidadeSorteios}
        </Typography>
      </CardContent>
      <CardActions>
      </CardActions>
    </Card>
  );
}
