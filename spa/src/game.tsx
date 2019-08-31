import React from "react";

import { Position, PositionOption } from "./type";
import { makeStyles } from "@material-ui/core";
import Square from "./components/square";

const useStyles = makeStyles(theme => ({
  root: { display: "flex", flexDirection: "column-reverse" },
  row: {}
}));

type ClassesType = ReturnType<typeof useStyles>;
const options: PositionOption[] = [1, 2, 3, 4, 5, 6, 7, 8];
const renderRow = (row: PositionOption, classes: ClassesType) => {
  return (
    <div className={classes.row}>
      {options.map(column => {
        return <Square position={{ row, column }}></Square>;
      })}
    </div>
  );
};
const Game = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      {options.map(x => {
        return renderRow(x, classes);
      })}
    </div>
  );
};

export default Game;
