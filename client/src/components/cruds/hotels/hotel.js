import React from "react";
import Button from "@material-ui/core/Button";
import "../../../components/generalStyles.css";
import CardList from "../../commons/CardList";
import CommonDialog from "../../commons/Dialog";
import HotelManager from "../../callHandlers/Hotel/HotelHandler";

export default function FormDialog() {
  const [open, setOpen] = React.useState(false);
  const [values, setValues] = React.useState({
    item: {
      id: "",
      name: " ",
      urlImage: " "
    },
    entityName: "Hotel",
    action: ""
  });

  const [item, setItem] = React.useState({
    id: 0,
    name: " ",
    urlImage: " "
  });

  const [timeToRefreshList, setListRefrsher] = React.useState(false);

  const [hotelList, setHotels] = React.useState([]);
  React.useEffect(() => {
    HotelManager.getAll().then(response => {
      setHotels(response);
    });
  }, [hotelList.count, timeToRefreshList]);

  function handleClickOpen() {
    setOpen(true);
  }

  function handleClose() {
    setOpen(false);
    setItem({});
    setListRefrsher(!timeToRefreshList);
  }

  const handleEdit = object => event => {
    setItem(object);
    handleClickOpen();
  };

  const handleDelete = object => event => {
    HotelManager.delete(object.id).then(res => {
      setListRefrsher(!timeToRefreshList);
    });
  };
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
            onClick={handleClickOpen}
          >
            Crear Hotel
          </Button>
        </div>
        <div className="hotelsContainer">
          <div className="row">
            <CardList
              handleEdit={handleEdit}
              items={hotelList}
              handleDelete={handleDelete}
            />
          </div>
        </div>

        <CommonDialog
          open={open}
          item={item}
          action={values.action}
          entityName={values.entityName}
          handleClose={handleClose}
          action="Crear"
        />
      </div>
    </div>
  );
}
