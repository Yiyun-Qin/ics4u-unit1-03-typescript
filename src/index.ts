/**
 * This is a program that calculates the time needs to cook food.
 *
 * By:      Yiyun Qin
 * Version: 2.0
 * Since:   2022-09-23
 */

import promptSync from 'prompt-sync'

const prompt = promptSync()
const maxFood = 3
const timeSubMinute = 1
const timeSubSec = 0
const timePizzaMinute = 0
const timePizzaSec = 45
const timeSoupMinute = 1
const timeSoupSec = 45
let foodTimeMinute: number = -1
let foodTimeSec: number = -1

const food = prompt('Which food do you want to heat, sub, pizza or soup?: ')
const foodNumberString = prompt(`How many ${food}(s) are you cooking?(max 3): `)

const foodNumber = parseInt(foodNumberString)
if (isNaN(foodNumber)) {
  console.log('Invalid food number!')
} else if (foodNumber > maxFood) {
  console.log('The maximum quantity of food is 3.')
} else if (foodNumber <= 0) {
  console.log('Please enter a positive number!')
} else {
  if (food === 'sub') {
    foodTimeMinute = foodNumber * timeSubMinute
    foodTimeSec = foodNumber * timeSubSec
  } else if (food === 'pizza') {
    foodTimeMinute = foodNumber * timePizzaMinute
    foodTimeSec = foodNumber * timePizzaSec
  } else if (food === 'soup') {
    foodTimeMinute = foodNumber * timeSoupMinute
    foodTimeSec = foodNumber * timeSoupSec
  } else {
    console.log('Please choose a food in options!')
  }
}
if (foodTimeMinute >= 0 && foodTimeSec >= 0) {
  if (foodTimeSec >= 60) {
    const multipleDouble = foodTimeSec / 60
    const multiple = Math.floor(multipleDouble)
    foodTimeMinute = foodTimeMinute + multiple
    foodTimeSec = foodTimeSec - multiple * 60
  }
  console.log(
    `The total cook time is ${foodTimeMinute} minutes and ${foodTimeSec} seconds.`
  )
}

console.log('\nDone.')
