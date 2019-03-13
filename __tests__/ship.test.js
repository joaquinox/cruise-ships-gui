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
    expect(new Ship(itinerary)).toBeInstanceOf(Object);
  });

it('has a starting port', () => {
    expect(ship.currentPort).toEqual(dover);
  });

it('gets added to port on instantiation', () => {
    expect(dover.ships).toContain(ship);
  });

describe('setSail', () => {
it('ship can set sail', () => {
      ship.setSail();

      expect(ship.currentPort).toBeFalsy();
      expect(dover.ships).not.toContain(ship);
    });

describe('dock', () => {
it('ship can dock at a different port', () => {
        ship.setSail();
        ship.dock();

        expect(ship.currentPort).toEqual(calais);
        expect(calais.ships).toContain(ship);
      });
    });
  });
});
