/* globals describe it expect */
const Ship = require('../src/ship.js');


describe('with ports and an itinerary', () => {
  let ship;
  let dover;
  let calais;
  let itinerary;

  beforeEach(() => {
    const port = {
      removeShip: jest.fn(),
      addShip: jest.fn(),
    };

    dover = {
      ...port,
      name: 'Dover',
      ships: [],
    };

    calais = {
      ...port,
      name: 'Calais',
      ships: [],
    };

    itinerary = {
      ports: [dover, calais],
    };

    ship = new Ship(itinerary);
  });

  it('can be instantiated', () => {
    expect(new Ship(itinerary)).toBeInstanceOf(Object);
  });

  it('has a starting port', () => {
    expect(ship.currentPort).toEqual(dover);
  });

  it('gets added to port on instantiation', () => {
    expect(dover.addShip).toHaveBeenCalledWith(ship);
  });

  it('ship can set sail', () => {
    ship.setSail();

    expect(ship.currentPort).toBeFalsy();
    expect(dover.removeShip).toHaveBeenCalledWith(ship);
  });

  it('ship can dock at a different port', () => {
    ship.setSail();
    ship.dock();

    expect(ship.currentPort).toEqual(calais);
    expect(calais.addShip).toHaveBeenCalledWith(ship);
  });
});
