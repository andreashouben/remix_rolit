export type Color = "R" | "Y" | "B" | "G";
export type CellValue = Color | "O"

export class Cell {

  private color: CellValue = "O";

  value() {
    return this.color;
  }

  turnRed() {
    this.color = "R";
  }

  turnYellow() {
    this.color = "Y";
  }

  turnBlue() {
    this.color = "B";
  }

  turnGreen() {
    this.color = "G";
  }
}