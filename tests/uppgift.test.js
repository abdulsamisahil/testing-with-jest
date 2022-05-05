const uppgift = require('../src/uppgift')

//metdvetet enhetstestning 1 på fel kod som har brist vid if-satser
test('speed i 5 ska lämna tillbaka alert alert-warning', () => {
  expect(uppgift.getBackgroundClass(5)).toBe('alert alert-warning')
})
//medvetet enhetstestning 1 på samma funktionen getBackgroundClass 
test('speed i 10 ska också returnera alert alert-warning', () => {
  expect(uppgift.getBackgroundClass(10)).toBe('alert alert-warning')
})

/* // Enhetstestning 2 med  korrekta if-satser som även tar hänsyn till exkat värdena som 5
test('speed less than 5 returns alert alert-danger', () => {
  expect(uppgift.getClass(5)).toBe('alert alert-danger')
})
//enhetstestning 2 med korrekta if-satser som även tar hänsyn till exkat värdena som 10
test('speed 10 should return success', () => {
  expect(uppgift.getClass(10)).toBe('alert alert-success')
}) */