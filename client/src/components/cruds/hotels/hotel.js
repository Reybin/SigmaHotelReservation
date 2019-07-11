import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import "../../../components/generalStyles.css";
import Card from '../../commons/Card';


export default function FormDialog() {
  const [open, setOpen] = React.useState(false);
  const [values, setValues] = React.useState({
    id: '',
    name: ' ',
    urlImage: ' ',
    entityName: ' '
  });
  function handleClickOpen(id) {
    setOpen(true);
  }

  function handleClose() {
    setOpen(false);
  }

  const handleChange = name => event => {
    setValues({ ...values, [name]: event.target.value });
  };

  var hotel = {
    name: "Prueba",
    imageUrl: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" 
  }

  return (    
    <div>
      <div className="hotelHeader">
        <span>Listado de Hoteles</span>
      </div>
      <div className="container">
        <div className="hotelCreator">
          <Button 
           variant="outlined"
           color="primary"
           size="large"
           variant="contained"
           color="primary"
           onClick={handleClickOpen}>
           Crear Hotel
          </Button>
        </div>
        <div className="hotelsContainer"> 
          <div className="row">
            <div className="col-md-4">
              <Card item={hotel} />
            </div>
            <div className="col-md-4">
              <Card item={hotel} />
            </div>
            <div className="col-md-4">
              <Card item={hotel} />
            </div>
            <div className="col-md-4">
              <Card item={hotel} />
            </div>
          </div>
         
        </div>      
        <Dialog 
          open={open}
          onClose={handleClose} 
          aria-labelledby="form-dialog-title" 
          fullWidth="true"
          maxWidth="lg"
        >
          <DialogTitle id="form-dialog-title">Nuevo Hotel</DialogTitle>
          <DialogContent>
          <div className="row">
            <div className="col-md-6">
            <TextField id="id" type="hidden" value={values.id} />
            <TextField
              autoFocus
              margin="dense"
              id="name"
              label="Nombre"
              type="text"
              value={values.name}
              onChange={handleChange('name')}
              fullWidth
            />           
            <TextField            
              margin="dense"
              id="urlImage"
              label="Imagen"
              type="text"
              value={values.urlImage}
              onChange={handleChange('urlImage')}
              fullWidth
            />
              </div>
              <div className="col-md-6">
                  <img className="imagePreview" src={values.urlImage}/>
              </div>
          </div>                        
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose} variant="contained" color="default">
              Cancel
            </Button>
            <Button onClick={handleClose} variant="contained" color="primary">
              Guardar
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    </div>
  );
}