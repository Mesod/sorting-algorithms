module.exports = (numbersArray) => {
    let unsortedNumbersArray = Object.assign([], numbersArray)
    let arrayLength = unsortedNumbersArray.length
    for (let i = 0; i < arrayLength; i++) {
        let minimumNumberIndex = i;
        for (let j = i + 1; j < arrayLength; j++) {
            if (unsortedNumbersArray[minimumNumberIndex] > unsortedNumbersArray[j]) {
                minimumNumberIndex = j
            }
        }
        if (minimumNumberIndex === i) continue
        let swap = unsortedNumbersArray[i]
        unsortedNumbersArray[i] = unsortedNumbersArray[minimumNumberIndex]
        unsortedNumbersArray[minimumNumberIndex] = swap
    }
    return unsortedNumbersArray
}