const adder = require('../sum.js')

test('adds 2 + 2 to equal 4', () => {
  expect(adder(2, 2)).toBe(4)
})

test('subtracts when second number is negative', () => {
  expect(adder(2, -2)).toBe(0)
})

test('converts string to number before adding', () => {
  expect(adder(2, '2')).toBe(4)
})

test('returns null if one or more is NaN', () => {
  expect(adder(2, 'hi')).toBe(null)
})