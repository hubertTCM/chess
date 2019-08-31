import React from "react";
import { Position, Role } from "../type";
import { Button, makeStyles } from "@material-ui/core";

export type SquareProps = {
  role?: Role;
  position: Position;
};

const useStyles = makeStyles(theme => ({
  dark: {
    backgroundColor: "RGB(187, 190, 100)"
  },
  light: {
    backgroundColor: "RGB(234, 240, 206)"
  }
}));

const Square = (props: SquareProps) => {
  const { position } = props;
  const { row, column } = position;
  const isDark = (row + column) % 2 == 0;
  const classes = useStyles();
  return (
    <Button
      className={isDark ? classes.dark : classes.light}
    >{`row:${position.row} column:${position.column}`}</Button>
  );
};

export default Square;
