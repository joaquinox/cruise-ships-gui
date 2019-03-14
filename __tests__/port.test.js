const Port = require('../src/port.js');
const Ship = require('../src/ship.js');
const Itinerary = require('../src/itinerary.js');

describe('Port', () => {
  let ship;
  let ship1;
  let dover;
  let calais;
  let itinerary;

  beforeEach(() => {
    dover = new Port('Dover');
    calais = new Port('Calais');
    itinerary = new Itinerary([dover, calais]);
    ship = { name: 'ship 0' };
    ship1 = { name: 'ship 1' };
  });

  it('can be instantiated', () => {
    expect(new Port()).toBeInstanceOf(Object);
  });

  it('Port has a name property', () => {
    expect(dover.name).toBe('Dover');
  });

  it('addShip', () => {
    dover.addShip(ship);

    expect(dover.ships).toContain(ship);
  });

  it('removeShip', () => {
    dover.addShip(ship);
    dover.addShip(ship1);
    dover.removeShip(ship1);

    expect(dover.ships).toEqual([ship]);
  });
});
