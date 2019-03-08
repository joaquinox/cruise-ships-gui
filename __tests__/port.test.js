const Port = require('../src/port.js');

describe('Port', () => {
it('can be instantiated', () => {
    expect(new Port()).toBeInstanceOf(Object);
  });

it('Port has a name property', () => {
    const port = new Port('Dover');
    expect(port.name).toBe('Dover');
  });
});
