const stack = require('../src/stack')

test('peek on empty stack returns undefined', () => {
  expect(stack.peek()).toBeUndefined()
})

test('peek on stack with one element returns that element', () => {
  expect(stack.push(1))
  expect(stack.peek()).toBeDefined()
  expect(stack.peek()).toBe(1)
})

test('peek on stack with two or more elements returns the top element', () => {
  stack.push(1)
  stack.push('wow')
  stack.push(42)
  expect(stack.peek()).toBeDefined()
  expect(stack.peek()).toBe(42)
})

//Enhetstest på stack.js pop till uppgift 5
test('pop on stack with three or more elements removes the top and returns the same element, later with peek we expect to see the next top element', () => {
  stack.push('sami')
  stack.push('martin')
  stack.push(8601)

  expect(stack.pop()).toBe(8601)
  expect(stack.peek()).toBe('martin')
})
