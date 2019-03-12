/* globals describe it expect */
const Ship = require('../src/ship.js');
const Port = require('../src/port.js');
const Itinerary = require('../src/itinerary.js');


describe('Ship', () => {
  let ship;
  let dover;
  let calais;
  let itinerary;

  beforeEach(() => {
    dover = new Port('Dover');
    calais = new Port('Calais');
    itinerary = new Itinerary([dover, calais]);
    ship = new Ship(itinerary);
  });

it('can be instantiated', () => {
    // const dover = new Port('Dover');
    // const itinerary = new Itinerary([dover]);
    expect(new Ship(itinerary)).toBeInstanceOf(Object);
  });

it('has a starting port', () => {
    // const dover = new Port('Dover');
    // const ship = new Ship(dover);
    expect(ship.currentPort).toEqual(dover);
  });

it('gets added to port on instantiation', () => {
    // const dover = new Port('Dover');
    // const itinerary = new Itinerary([dover]);
    // const ship = new Ship(itinerary);

    expect(dover.ships).toContain(ship);
  });

// describe('setSail', () => {
it('ship can set sail', () => {
    // const dover = new Port('Dover');
    // const calais = new Port('Calais');
    // const itinerary = new Itinerary([dover, calais]);
    // const ship = new Ship(itinerary);

    ship.setSail();

    expect(ship.currentPort).toBeFalsy();
    expect(dover.ships).not.toContain(ship);
  });

// describe('dock', () => {
it('ship can dock at a different port', () => {
    // const dover = new Port('Dover');
    // const calais = new Port('Calais');
    // const itinerary = new Itinerary([dover, calais]);
    // const ship = new Ship(itinerary);

    ship.setSail();
    ship.dock();

    expect(ship.currentPort).toEqual(calais);
    expect(calais.ships).toContain(ship);
  });
});
