const { Builder, By, until } = require('selenium-webdriver')
require('chromedriver')

const fileUnderTest =
  'file://' + __dirname.replace(/ /g, '%20') + '/../dist/index.html'
const defaultTimeout = 10000
let driver
let pushElementBackgroundColor
//jasmine.DEFAULT_TIMEOUT_INTERVAL = 1000 * 60 * 5 // 5 minuter

// Det här körs innan vi kör testerna för att säkerställa att chrome är igång
beforeAll(async () => {
  console.log(fileUnderTest)
  driver = await new Builder().forBrowser('chrome').build()
  await driver.get(fileUnderTest)
})

// Allra sist avslutar vi Chrome igen
afterAll(async () => {
  await driver.quit()
}, defaultTimeout)

test('The stack should be empty in the beginning', async () => {
  let stack = await driver.findElement(By.id('top_of_stack')).getText()
  expect(stack).toEqual('n/a')
})
//End to end med selenium uppgift
test('The push till stacken element should return a green color', async () => {
  let pushElement = await driver.findElement(By.id('push')).getCssValue('background-color')
  expect(pushElement).toEqual('rgba(0, 128, 0, 1)')
})

describe('Clicking "Pusha till stacken"', () => {
  it('should open a prompt box', async () => {
    let push = await driver.findElement(By.id('push'))
    await push.click()
    let alert = await driver.switchTo().alert()
    await alert.sendKeys('Bananer')
    await alert.accept()
  })
})


