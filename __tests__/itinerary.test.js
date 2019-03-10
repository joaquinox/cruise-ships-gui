const Itinerary = require('../src/itinerary.js');

describe('Itinerary', () => {
  it('can be instantiated', () => {
    expect(new Itinerary()).toBeInstanceOf(Object);
  });
});
