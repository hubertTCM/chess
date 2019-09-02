import React, { useState } from "react";

import { PositionOption, LiveRole } from "./type";
import { makeStyles } from "@material-ui/core";
import Square from "./components/square";

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    height: "100%"
  },
  container: {
    display: "flex",
    flexDirection: "column-reverse",
    width: "80%",
    height: "80%"
  },
  row: { display: "flex", flex: "1 1 0" },
  item: {
    flex: "1 1 0"
  }
}));

const options: PositionOption[] = [1, 2, 3, 4, 5, 6, 7, 8];
const initLiveRoles = (): LiveRole[] => {
  let result: LiveRole[] = [
    {
      role: { player: "white", piece: "rook" },
      position: { row: 1, column: 1 }
    },
    {
      role: { player: "white", piece: "kight" },
      position: { row: 1, column: 2 }
    },
    {
      role: { player: "white", piece: "bishop" },
      position: { row: 1, column: 3 }
    },
    {
      role: { player: "white", piece: "queen" },
      position: { row: 1, column: 4 }
    },
    {
      role: { player: "white", piece: "king" },
      position: { row: 1, column: 5 }
    },
    {
      role: { player: "white", piece: "bishop" },
      position: { row: 1, column: 6 }
    },
    {
      role: { player: "white", piece: "kight" },
      position: { row: 1, column: 7 }
    },
    {
      role: { player: "white", piece: "rook" },
      position: { row: 1, column: 8 }
    }
  ];

  options.map(column =>
    result.push({
      role: { player: "white", piece: "pawn" },
      position: { row: 2, column }
    })
  );

  const positionPairs: [PositionOption, PositionOption][] = [[1, 8], [2, 7]];
  positionPairs.map(([whiteRow, blackRow]) => {
    const whiteLiveRoles: LiveRole[] = result.filter(
      x => x.position.row === whiteRow
    );
    whiteLiveRoles.map(x => {
      const { role, position } = x;
      result.push({
        role: { ...role, player: "black" },
        position: { ...position, row: blackRow }
      });
    });
  });

  return result;
};
const Game = () => {
  const classes = useStyles();
  const [liveRoles] = useState<LiveRole[]>(initLiveRoles());
  return (
    <div className={classes.root}>
      <div className={classes.container}>
        {options.map(row => {
          return (
            <div className={classes.row}>
              {options.map(column => {
                const liveRole = liveRoles.find(
                  x => x.position.row === row && x.position.column === column
                );
                return (
                  <Square
                    className={classes.item}
                    position={{ row, column }}
                    role={liveRole && liveRole.role}
                    key={`square-${row}-${column}`}
                  ></Square>
                );
              })}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Game;
