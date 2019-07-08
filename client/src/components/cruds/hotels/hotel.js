import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import "../../../components/generalStyles.css";


export default function FormDialog() {
  const [open, setOpen] = React.useState(false);
  const [createValues, setCreateValues] = React.useState({
    name: ' ',
    urlImage: ' '
  });
  function handleClickOpenCreate() {
    setOpen(true);
  }

  function handleCloseCreate() {
    setOpen(false);
  }

  const handleCreateChange = name => event => {
    setCreateValues({ ...createValues, [name]: event.target.value });
  };


  return (

    <div>

      <div className="hotelHeader">
         <img src="~/resources/images/hotels-header.jpg" />
      </div>

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
        <div className="row">
            <div className="col-md-6">
            <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Nombre"
            type="text"
            value={createValues.name}
            onChange={handleCreateChange('name')}
            fullWidth
          />
           <TextField            
            margin="dense"
            id="urlImage"
            label="Imagen"
            type="text"
            value={createValues.urlImage}
            onChange={handleCreateChange('urlImage')}
            fullWidth
          />
            </div>
            <div className="col-md-6">
                <img className="imagePreview" src={createValues.urlImage}/>
            </div>
        </div>                        
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseCreate} variant="contained" color="default">
            Cancel
          </Button>
          <Button onClick={handleCloseCreate} variant="contained" color="primary">
            Guardar
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}