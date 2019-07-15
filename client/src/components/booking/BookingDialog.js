import React from "react";
import Dialog from "@material-ui/core/Dialog";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import Steeps from "./steeps";

const BookingDialog = props => {
  return (
    <Dialog
      open={props.open}
      onClose={props.handleClose}
      aria-labelledby="form-dialog-title"
      fullWidth
      maxWidth="lg"
    >
      <DialogTitle id="form-dialog-title">
        <h4>Reserva</h4>
      </DialogTitle>
      <DialogContent className="container">
        <Steeps />
      </DialogContent>
    </Dialog>
  );
};
export default BookingDialog;
