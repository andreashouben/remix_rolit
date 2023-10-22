import { Cell } from "~/rolit/cell";

class Board {
  getGrid() {
    const createEmptyRow = () => [new Cell(),new Cell(),new Cell(),new Cell(),
      new Cell(),new Cell(),new Cell(),new Cell()]
    const board = [
      createEmptyRow(),
      createEmptyRow(),
      createEmptyRow(),
      createEmptyRow(),
      createEmptyRow(),
      createEmptyRow(),
      createEmptyRow(),
      createEmptyRow(),
    ];
    board[3][3].turnRed();
    board[3][4].turnGreen();
    board[4][3].turnBlue();
    board[4][4].turnYellow();
    return board;
  }
}

const printGrid = (grid: Cell[][]): string =>
  grid
    .map(row => row
      .map(cell => cell.value())
      .join(" "))
    .join("\n");

describe("board", () => {
  it("initializes as 8x8 grid with the four colors in the middle", () => {
    const board = new Board();

    const grid = board.getGrid();

    expect(printGrid(grid)).toMatchSnapshot()
  });
});