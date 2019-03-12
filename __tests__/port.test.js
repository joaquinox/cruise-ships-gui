const Port = require('../src/port.js');

describe('Port', () => {
it('can be instantiated', () => {
    expect(new Port()).toBeInstanceOf(Object);
  });

it('Port has a name property', () => {
    const dover = new Port('Dover');
    expect(dover.name).toBe('Dover');
  });

it('addShip', () => {
    const dover = new Port('Dover');
    const ship = {};

    dover.addShip(ship);

    expect(dover.ships).toContain(ship);
  });

it('removeShip', () => {
    const dover = new Port('Dover');
    const ship = { name: 'ship 0' };
    const ship1 = { name: 'ship 1' };

    dover.addShip(ship);
    dover.addShip(ship1);
    dover.removeShip(ship1);

    expect(dover.ships).toEqual([ship]);
  });
});
