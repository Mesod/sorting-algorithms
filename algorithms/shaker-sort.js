module.exports = (numbersArray) => {
    let unsortedNumbersArray = Object.assign([], numbersArray)
    let arrayLength = unsortedNumbersArray.length
    for (let i = 0; i < arrayLength - 2; i++) {
        let swapCounta = 0
        for (let j = 0; j < arrayLength - 1; j++) {

            if (unsortedNumbersArray[j] > unsortedNumbersArray[j + 1]) {
                swap(unsortedNumbersArray, i, i + 1)
                swapCounta++
            }
        }
        if (swapCounta === 0) break
        swapCounta = 0
        for (let j = arrayLength - 1; j > 0; j--) {
            if (unsortedNumbersArray[j - 1] > unsortedNumbersArray[j]) {
                swap(unsortedNumbersArray, j, j - 1)
                swapCounta++
            }
        }
        if (swapCounta === 0) break        
    }
    return unsortedNumbersArray
}

function swap(numbersArray, firstNumberIndex, secondNumberIndex) {
    let swap = numbersArray[firstNumberIndex]
    numbersArray[firstNumberIndex] = numbersArray[secondNumberIndex]
    numbersArray[secondNumberIndex] = swap
}