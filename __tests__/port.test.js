const Port = require('../src/port.js');

describe('Port', () => {
  let titanic;
  let mayflower;
  let dover;

  beforeEach(() => {
    dover = new Port('Dover');
    titanic = { name: 'ship 0' };
    mayflower = { name: 'ship 1' };
  });

  it('can be instantiated', () => {
    expect(new Port()).toBeInstanceOf(Object);
  });

  it('Port has a name property', () => {
    expect(dover.name).toBe('Dover');
  });

  it('addShip', () => {
    dover.addShip(titanic);

    expect(dover.ships).toContain(titanic);
  });

  it('removeShip', () => {
    dover.addShip(titanic);
    dover.addShip(mayflower);
    dover.removeShip(mayflower);

    expect(dover.ships).toEqual([titanic]);
  });
});
