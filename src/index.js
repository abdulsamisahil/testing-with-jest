import * as stack from './stack.js'

window.onload = () => {
  console.log('done')

  const pop = document.querySelector('#pop')
  const push = document.querySelector('#push')
  const peek = document.querySelector('#peek')
  const display = document.querySelector('#top_of_stack')
 
  pop.addEventListener('click', () => {
    const text = 'Tog bort ' + stack.pop()

    alert(text)
  })
  push.addEventListener('click', () => {
    const text = prompt('Vad ska vi lägga till på stack?')

    stack.push(text)

    display.innerHTML = text
  })
  display.addEventListener('click', () => {
    display.innerHTML = stack.peek()
  })
}
