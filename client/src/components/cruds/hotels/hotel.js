import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import "../../../components/generalStyles.css";
import Card from '../../commons/Card';
import CommonDialog from '../../commons/Dialog';


export default function FormDialog() {
  const [open, setOpen] = React.useState(false);
  const [values, setValues] = React.useState({
    item: {
      id: '',
      name: ' ',
      urlImage: ' ',
      entityName: ' '
    },
    entityName: 'Hotel',
    action: ''    
    
  });
  function handleClickOpen(action) {
    setOpen(true);
  }

  function handleClose() {
    setOpen(false);
  }

  const handleEdit = fill => event => {
    setValues({ ...values, item: fill });
    handleClickOpen();
  }


  var hotel = {
    id: 'werwerwerwe',
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
              <Card item={hotel} handleEdit={handleEdit(hotel)} />
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

        <CommonDialog 
          open={open} 
          item={values.item}
          action={values.action}
          entityName={values.entityName}
          handleClose={handleClose}
          action="Crear"
        />

      </div>
    </div>
  );
}