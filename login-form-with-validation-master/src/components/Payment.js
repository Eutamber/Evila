import * as React from 'react';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';


export default function PaymentForm() {
  return (
    <React.Fragment>
      <Typography variant="h4" gutterBottom>
        Payment 
      </Typography>
      <br/>
      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <TextField
            required
            id="cardName"
            label="name on card"
            fullWidth
            autoComplete="cc-name"
           
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            required
            id="cardNumber"
            label="card number"
            fullWidth
            autoComplete="cc-number"
         
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            required
            id="expDate"
            label="expiry date"
            fullWidth
            autoComplete="cc-exp"
         
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            required
            id="cvv"
            label="cvv"
            helperText="Last three digits on signature strip"
            fullWidth
            autoComplete="cc-csc"
          />
        </Grid>
     
      </Grid>
    </React.Fragment>
  );
}