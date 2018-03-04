//@ToDo: injecting all the routes, methods for generating mock data, algorithm's tester
const bubbleSort    = require('algorithms/bubble-sort')
const insertionSort = require('algorithms/insertion-sort')

let unsortedNumbers = [6, 5, 3, 1, 8, 7, 2, 4]

let sortedNumbersByBubble = bubbleSort(unsortedNumbers)

let sortedNumbersByInsertion = insertionSort(unsortedNumbers)



console.log(`UNSORTED  >>>>>> ${unsortedNumbers}\nBUBBLE    >>>>>> ${sortedNumbersByBubble}\nINSERTION >>>>>> ${sortedNumbersByInsertion}`)