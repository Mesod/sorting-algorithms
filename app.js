//@ToDo: injecting all the routes, methods for generating mock data, algorithm's tester
const bubbleSort = require('algorithms/bubble-sort')
const insertionSort = require('algorithms/insertion-sort')
const selectionSort = require('algorithms/selection-sort')
const shakerSort = require('algorithms/shaker-sort')
const countingSort = require('algorithms/counting-sort')

const numbersArray = [10, 100, 1000, 100000, 1000000]
const fs = require('fs')
for (numbersCounta of numbersArray) {
    const unsortedNumbers = JSON.parse(fs.readFileSync(`${numbersCounta}_numbers.json`))

    let date = Date.now()
    let sortedNumbersByBubble = bubbleSort(unsortedNumbers)
    let bubbleTime = Date.now() - date
    
    date = Date.now()
    let sortedNumbersByInsertion = insertionSort(unsortedNumbers)
    let insertionTime = Date.now() - date
    
    date = Date.now()
    let sortedNumbersBySelection = selectionSort(unsortedNumbers)
    let selectionTime = Date.now() - date
    
    date = Date.now()
    let sortedNumbersByShaker = shakerSort(unsortedNumbers)
    let shakerTime = Date.now() - date
    
    date = Date.now()
    let sortedNumbersByCounting = countingSort(unsortedNumbers)
    let coutingTime = Date.now() - date
    
    console.log(`sorting ${numbersCounta} numbers`)
    console.log(`BUBBLE    >>>>>> ${bubbleTime}`)
    console.log(`INSERTION >>>>>> ${insertionTime}`)
    console.log(`SELECTION >>>>>> ${selectionTime}`)
    console.log(`SHAKER    >>>>>> ${shakerTime}`)
    console.log(`COUNTING  >>>>>> ${coutingTime}`)
    
}