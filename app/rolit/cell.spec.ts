import { Cell } from "~/rolit/cell";

describe("Cell", () => {

  it("is initally empty", () => {
    const cell = new Cell();

    expect(cell.value()).toEqual("O");
  });

  it("can turn red", () => {
    const cell = new Cell();

    cell.turnRed();

    expect(cell.value()).toEqual("R");
  });

  it("can turn yellow", () => {
    const cell = new Cell();

    cell.turnYellow();

    expect(cell.value()).toEqual("Y");
  });

  it('can turn blue', () =>{
    const cell = new Cell();

    cell.turnBlue();

    expect(cell.value()).toEqual("B");
  })

  it('can turn green', () =>{
    const cell = new Cell();

    cell.turnGreen();

    expect(cell.value()).toEqual("G");
  })



});