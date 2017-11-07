// simple_clock.js test with jest

const clock = require("./simple_clock.js");

test('Sanity Check', () => {
  let newClock = new clock.Time();
  expect(newClock).toBeTruthy();
});

test('Time class should return a number value', () => {
  let newClock = new clock.Time();

  function callback(data) {
    console.log(typeof data);
    expect(data.toMinutes()).toBe('number');
  }

  newClock.setNewCallback(callback);
});

