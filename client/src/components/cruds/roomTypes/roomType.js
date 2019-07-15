import React from "react";
import Button from "@material-ui/core/Button";
import "../../../components/generalStyles.css";
import CardList from "../../commons/CardList";
import CommonDialog from "../../commons/Dialog";
import Manager from "../../callHandlers/Hotel/RoomTypeHandler";

export default function FormDialog() {
  const [open, setOpen] = React.useState(false);
  const [values, setValues] = React.useState({
    item: {
      id: "",
      name: " ",
      urlImage: " "
    },
    entityName: "Tipo de Habitacion",
    action: ""
  });

  const [item, setItem] = React.useState({
    id: 0,
    name: " ",
    urlImage: " "
  });

  const [timeToRefreshList, setListRefrsher] = React.useState(false);

  const [typeList, setTypes] = React.useState([]);
  React.useEffect(() => {
    Manager.getAll().then(response => {
      setTypes(response);
    });
  }, [typeList.count, timeToRefreshList]);

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
    Manager.delete(object.id).then(res => {
      setListRefrsher(!timeToRefreshList);
    });
  };

  const handleSave = object => {
    Manager.handleSave(object).then(res => {
      handleClose();
    });
  };

  return (
    <div>
      <div className="hotelHeader">
        <span>Listado de Tipos de Habitaciones</span>
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
            Crear Tipo
          </Button>
        </div>
        <div className="hotelsContainer">
          <div className="row">
            <CardList
              handleEdit={handleEdit}
              items={typeList}
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
          handleSave={handleSave}
          action="Crear"
        />
      </div>
    </div>
  );
}
