// Intentionally fail code, if speed equals to 5, it should return warning or danger, but success is recieved
exports.getBackgroundClass = (speed) => {
  if (speed < 5) return 'alert alert-danger'
  else if (speed > 5 && speed < 10) return 'alert alert-warning'
  else return 'alert alert-success'
}

// Correct code to test 5 and 10 speed
exports.getClass = (speed) => {
  if (speed < 4) return 'alert alert-danger'
  else if (speed < 10) return 'alert alert-warning'
  else return 'alert alert-success'
}
