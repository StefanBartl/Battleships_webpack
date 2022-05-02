// ? Testing setup
const TestShip= require('./ship');
const MS_Battleship = new TestShip(7,1);

test('Ships should have a length property.', () => {
  expect(MS_Battleship.length).toBe(7);
});

test('Ships should have a damage property.', () => {
  expect(MS_Battleship.damage).toBe(1);
});

test('Ships should have a sunken property.', () => {
  expect(MS_Battleship.sunkenState(true)).toBe(`This ship isn't sunken.`);
});

test('Ships should have a sunken property.', () => {
  expect(MS_Battleship.sunkenState(false)).toBe(false);
});

test('Ships should have a sunken property.', () => {
  expect(MS_Battleship.hit(2)).toBe(`Ship hitted at section 2`);
});
