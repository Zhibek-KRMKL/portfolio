import { Button } from "antd";
import React, { useState, useMemo } from "react";
import ListItemChild from "./ListItemChild";

function ListItem() {
  const onSubmit = (values) => {
    console.log("Data received in ListItem", values);
  };
  return (
    <>
      <ListItemChild onSubmit={onSubmit} />
    </>
  );
}

export default ListItem;
