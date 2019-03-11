/* globals describe it expect */
const Ship = require('../src/ship.js');
const Port = require('../src/port.js');
const Itinerary = require('../src/itinerary.js');


describe('Ship', () => {
it('can be instantiated', () => {
    expect(new Ship()).toBeInstanceOf(Object);
  });

it('has a starting port', () => {
    const dover = new Port('Dover');
    const ship = new Ship(dover);
    expect(ship.currentPort).toBe(dover);
  });

it('gets added to port on instantiation', () => {
    const dover = new Port('Dover');
    const itinerary = new Itinerary([dover]);
    const ship = new Ship(itinerary);

    expect(dover.ships).toContain(ship);
  });
});

describe('setSail', () => {
it('ship can set sail', () => {
    const dover = new Port('Dover');
    const ship = new Ship(dover);
    ship.setSail();
    expect(ship.currentPort).toBeFalsy();
  });
});

describe('dock', () => {
it('ship can dock at a different port', () => {
    const dover = new Port('Dover');
    const ship = new Ship(dover);

    const calais = new Port('Calais');
    ship.dock(calais);

    expect(ship.currentPort).toBe(calais);
  });
});
