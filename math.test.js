const { sumar } = require('./math');

test('La suma de 1 + 2 debe ser 3', () => {
  expect(sumar(1, 2)).toBe(3);
});