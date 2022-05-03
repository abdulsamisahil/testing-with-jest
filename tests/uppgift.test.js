const uppgift = require('../src/uppgift')

test('speed less than 5 returns alert alert-danger', () => {
  expect(uppgift.getBackgroundClass(5)).toBe('alert alert-danger')
})

test('speed 10 should return success', () => {
  expect(uppgift.getBackgroundClass(10)).toBe('alert alert-success')
})
