import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepLabel from "@material-ui/core/StepLabel";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import DatePicker from "react-datepicker";
import TextField from "@material-ui/core/TextField";
import "react-datepicker/dist/react-datepicker.css";
import "./bookingStyles.css";
import HotelList from "../commons/CardList";
import HotelManager from "../callHandlers/Hotel/HotelHandler";
import DialogActions from "@material-ui/core/DialogActions";

const useStyles = makeStyles(theme => ({
  root: {
    width: "90%"
  },
  backButton: {
    marginRight: theme.spacing(1)
  },
  instructions: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1)
  }
}));

const CurrentBooking = {
  startDate: "",
  endDate: "",
  hotelId: "",
  kids: 0,
  adults: 0
};

function getSteps() {
  return [
    "Seleccion de Fechas",
    "Seleccioon de Hotel",
    "Verificacion de Reserva"
  ];
}

const PickDates = props => {
  const [startDate, setStartDate] = React.useState("");
  const handleStartDateChange = date => {
    var parsedDate = new Date(date).toLocaleDateString("En-us");
    setStartDate(date);
    CurrentBooking.startDate = parsedDate;
  };

  const [endDate, setEndDate] = React.useState("");
  const handleEndDateChange = date => {
    var parsedDate = new Date(date).toLocaleDateString("En-us");
    setEndDate(date);
    CurrentBooking.endDate = date;
  };

  const [Quantities, setQtty] = React.useState({
    kids: 0,
    adults: 0
  });
  const handleQttyChange = name => event => {
    setQtty({ ...Quantities, [name]: event.target.value });
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-8 offset-1">
          <div className="pickerContainer">
            <div className="dateTitle">
              <span>Fecha de Entrada</span>
            </div>
            <DatePicker
              inline
              selected={startDate}
              selectsStart
              startDate={startDate}
              endDate={endDate}
              onChange={handleStartDateChange}
              dateFormat="MM/dd/yyyy"
            />
          </div>
          <div className="pickerContainer">
            <div className="dateTitle">
              <span>Fecha de Salida</span>
            </div>
            <DatePicker
              inline
              selected={endDate}
              selectsEnd
              startDate={startDate}
              endDate={endDate}
              onChange={handleEndDateChange}
              minDate={startDate}
              dateFormat="MM/dd/yyyy"
            />
          </div>
        </div>
        <div className="col-md-1">
          <br />
          <TextField
            autoFocus
            margin="dense"
            id="adults"
            label="Adultos"
            type="number"
            value={Quantities.adults}
            onChange={handleQttyChange("adults")}
            fullWidth
          />
          <hr />
          <TextField
            margin="dense"
            id="kids"
            label="Niños"
            type="number"
            value={Quantities.kids}
            onChange={handleQttyChange("kids")}
            fullWidth
          />
        </div>
      </div>
    </div>
  );
};

export default function HorizontalLabelPositionBelowStepper() {
  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(0);
  const steps = getSteps();

  function handleNext() {
    setActiveStep(prevActiveStep => prevActiveStep + 1);
  }

  function handleBack() {
    setActiveStep(prevActiveStep => prevActiveStep - 1);
  }

  function handleReset() {
    setActiveStep(0);
  }

  const PickHotel = props => {
    const [hotelList, setHotels] = React.useState([]);
    React.useEffect(() => {
      HotelManager.getAll().then(response => {
        setHotels(response);
      });
    }, [hotelList.count]);

    const handleClick = item => event => {
      CurrentBooking.hotelId = item.id;
      handleNext();
    };

    return (
      <div className="row">
        <HotelList items={hotelList} handleSelect={handleClick} />
      </div>
    );
  };

  const BookingReview = props => {
    return (
      <div className="jumbotron">
        <h2 className="display-5"> Detalles de Reserva!</h2>
        <p className="lead">
          Favor verificar los datos de Reserva antes de continuar, si esta
          seguro haga click en el botom continuar.
        </p>
      </div>
    );
  };

  function getStepContent(stepIndex) {
    switch (stepIndex) {
      case 0:
        return <PickDates />;
      case 1:
        return <PickHotel />;
      case 2:
        return <BookingReview />;
    }
  }

  return (
    <div className={classes.root}>
      <Stepper activeStep={activeStep} alternativeLabel>
        {steps.map(label => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
      <div className="container">
        {activeStep === steps.length ? (
          <div>
            <div className="jumbotron">
              <h2 className="display-5"> Reserva Exitosa</h2>
              <p className="lead">Gracias, Reserva Exitosa!</p>
            </div>
            <Button onClick={handleReset} color="primary">
              NUEVA RESERVA
            </Button>
          </div>
        ) : (
          <div>
            <div>{getStepContent(activeStep)}</div>

            <div className="offset-8">
              <Button
                disabled={activeStep === 0}
                onClick={handleBack}
                className={classes.backButton}
              >
                ATRAS
              </Button>
              <Button
                variant="contained"
                color="primary"
                onClick={handleNext}
                disabled={activeStep === 1}
              >
                {activeStep === steps.length - 1 ? "CONFIRMAR" : "CONTINUAR"}
              </Button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
