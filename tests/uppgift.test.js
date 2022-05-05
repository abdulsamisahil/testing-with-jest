const uppgift = require('../src/uppgift')

//failas metdvetet då enhetstestning görs på kod som har brist vid if-satser
test('speed i 5 ska lämna tillbaka alert alert-warning', () => {
  expect(uppgift.getBackgroundClass(5)).toBe('alert alert-warning')
})
//enhetstestning 1
test('speed i 10 ska också returnera alert alert-success', () => {
  expect(uppgift.getBackgroundClass(10)).toBe('alert alert-success')
})

 // Enhetstestning 2 på getClass med  korrekta if-satser som även tar hänsyn till exkat värdena som 5
test('speed i 5 ska returnera alert alert-warning', () => {
  expect(uppgift.getClass(5)).toBe('alert alert-warning')
})
//enhetstestning 2 på getClass med korrekta if-satser som även tar hänsyn till exkat värdena som 10
test('speed i 10 ska lämna alert alert-success tillbaks', () => {
  expect(uppgift.getClass(10)).toBe('alert alert-success')
}) 