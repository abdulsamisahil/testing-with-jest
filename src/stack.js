const _ = require('underscore')

let stack = []

exports.push = (element) => {
  stack.push(element)
}

exports.pop = () => {
  return stack.pop()
}

exports.peek = () => {
  return stack[0]
}
