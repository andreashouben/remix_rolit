import { Cell } from "~/rolit/cell";

class Rolit {
  viewBoard() {
    return [];
  }
}




describe("rolit", () => {

  it("sets up the initial board", () => {
    const rolit = new Rolit();

    const board = rolit.viewBoard();

    expect(board).toEqual([]);
  });

});
