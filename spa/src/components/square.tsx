import React from "react";
import clsx from "clsx";
import { Position, Role } from "../type";
import { Button, makeStyles } from "@material-ui/core";

export type SquareProps = {
  role?: Role;
  position: Position;
  className: string;
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
  const { position, role, className, ...rest } = props;
  const { row, column } = position;
  const isDark = (row + column) % 2 == 0;
  const classes = useStyles();
  return (
    <Button
      {...rest}
      className={clsx(isDark ? classes.dark : classes.light, className)}
    >
      {role && `${role.player}-${role.piece}`}
      {!role && ""}
    </Button>
  );
};

export default Square;
