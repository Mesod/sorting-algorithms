//@ToDo: injecting all the routes, methods for generating mock data, algorithm's tester
const bubbleSort    = require('algorithms/bubble-sort')
const insertionSort = require('algorithms/insertion-sort')
const selectionSort = require('algorithms/selection-sort')
const shakerSort    = require('algorithms/shaker-sort')
const countingSort  = require('algorithms/counting-sort')

let unsortedNumbers = [6, 5, 3, 1, 8, 7, 1, 2, 4]

let sortedNumbersByBubble = bubbleSort(unsortedNumbers)

let sortedNumbersByInsertion = insertionSort(unsortedNumbers)

let sortedNumbersBySelection = selectionSort(unsortedNumbers)

let sortedNumbersByShaker = shakerSort(unsortedNumbers)

let sortedNumbersByCounting = countingSort(unsortedNumbers)

console.log(`UNSORTED  >>>>>> ${unsortedNumbers}`)
console.log(`BUBBLE    >>>>>> ${sortedNumbersByBubble}`)
console.log(`INSERTION >>>>>> ${sortedNumbersByInsertion}`)
console.log(`SELECTION >>>>>> ${sortedNumbersBySelection}`)
console.log(`SHAKER    >>>>>> ${sortedNumbersByShaker}`)
console.log(`COUNTING  >>>>>> ${sortedNumbersByCounting}`)
