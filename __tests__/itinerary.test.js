const Itinerary = require('../src/itinerary.js');
const Ship = require('../src/ship.js');
const Port = require('../src/port.js');

describe('Itinerary', () => {
  it('can be instantiated', () => {
    expect(new Itinerary(jest.fn())).toBeInstanceOf(Object);
  });
  it('can have ports', () => {
    const dover = new Port('Dover');
    const calais = new Port('Calais');
    const itinerary = new Itinerary([dover, calais]);
    const ship = new Ship(itinerary);

    expect(ship.itinerary.ports).toEqual([dover, calais]);
  });
});
