const Port = require('../src/port.js');

describe('Port', () => {
it('can be instantiated', () => {
    expect(new Port()).toBeInstanceOf(Object);
  });

it('Port has a name property', () => {
    const port = new Port('Dover');
    expect(port.name).toBe('Dover');
  });

it('addShip', () => {
    const port = new Port('Dover');
    const ship = {};

    port.addShip(ship);

    expect(port.ships).toContain(ship);
  });

it('removeShip', () => {
    const port = new Port('Dover');
    const ship = {};
    const ship1 = {};

    port.addShip(ship);
    port.addShip(ship1);
    port.removeShip(ship1);

    expect(port.ships).toEqual([ship]);
  });
});
