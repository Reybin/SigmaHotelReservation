import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

export default function FormDialog() {
  const [open, setOpen] = React.useState(false);

  function handleClickOpenCreate() {
    setOpen(true);
  }

  function handleCloseCreate() {
    setOpen(false);
  }

  return (
    <div>
      <Button variant="outlined" color="primary" onClick={handleClickOpenCreate}>
       Crear
      </Button>
      <Dialog 
        open={open} 
        onClose={handleCloseCreate} 
        aria-labelledby="form-dialog-title" 
        fullWidth="true"
        maxWidth="lg"
      >
        <DialogTitle id="form-dialog-title">Nuevo Hotel</DialogTitle>
        <DialogContent>
        <Grid item xs={6}>
        <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Nombre"
            type="text"
            ref={input => (this.name = input)}
            fullWidth
          />
           <TextField            
            margin="dense"
            id="urlImage"
            label="Imagen"
            type="text"
            ref={input => (this.urlImage = input)}
            fullWidth
          />
        </Grid>
        <Grid item xs={6}>
          <image src={this.urlImage.value}/>
        </Grid>                
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseCreate} color="primary">
            Cancel
          </Button>
          <Button onClick={handleCloseCreate} color="primary">
            Subscribe
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}