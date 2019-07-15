import React from "react";
import Card from "./Card";
const CardList = props => {
  const list = props.items.map(item => (
    <div className="col-md-4">
      <Card
        item={item}
        handleEdit={props.handleEdit && props.handleEdit(item)}
        handleDelete={props.handleDelete && props.handleDelete(item)}
        handleSelect={props.handleSelect && props.handleSelect(item)}
        key={item.id}
      />
    </div>
  ));

  return list;
};

export default CardList;
