import React from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";

const FormDialog = props => {
  const [values, setValues] = React.useState({
    id: 0,
    name: " ",
    imageUrl: " "
  });

  React.useEffect(() => {
    setValues(props.item);
  }, [props.item]);

  const handleChange = name => event => {
    setValues({ ...values, [name]: event.target.value });
  };

  function handleSave() {
    props.handleSave(values);
  }

  return (
    <Dialog
      open={props.open}
      onClose={props.handleClose}
      aria-labelledby="form-dialog-title"
      fullWidth
      maxWidth="lg"
    >
      <DialogTitle id="form-dialog-title">
        {props.action} {props.entityName}
      </DialogTitle>
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
              onChange={handleChange("name")}
              fullWidth
            />
            <TextField
              margin="dense"
              id="urlImage"
              label="Imagen"
              type="text"
              value={values.imageUrl}
              onChange={handleChange("imageUrl")}
              fullWidth
            />
          </div>
          <div className="col-md-6">
            <img className="imagePreview" src={values.imageUrl} />
          </div>
        </div>
      </DialogContent>
      <DialogActions>
        <Button onClick={props.handleClose} variant="contained" color="default">
          Cancelar
        </Button>
        <Button onClick={handleSave} variant="contained" color="primary">
          Guardar
        </Button>
      </DialogActions>
    </Dialog>
  );
};
export default FormDialog;
