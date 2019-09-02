export type Player = "white" | "black";
export type Piece = "king" | "rook" | "bishop" | "queen" | "kight" | "pawn";
export type PositionOption = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8;
export type Position = {
  row: PositionOption;
  column: PositionOption;
};
export type Role = {
  player: Player;
  piece: Piece;
};
export type LiveRole = {
  role: Role;
  position: Position;
};
