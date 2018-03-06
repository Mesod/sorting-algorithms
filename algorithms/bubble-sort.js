module.exports = (numbersArray) => {
    let unsortedNumbersArray = Object.assign([], numbersArray)
    let arrayLength = unsortedNumbersArray.length
    for (let i = 0; i < arrayLength - 2; i++) {
        let swapCounter = 0;
        for (let j = 0; j < arrayLength - 1; j++) {
            if (unsortedNumbersArray[j] > unsortedNumbersArray[j + 1]) {
                let tempNumber = unsortedNumbersArray[j + 1]
                unsortedNumbersArray[j + 1] = unsortedNumbersArray[j]
                unsortedNumbersArray[j] = tempNumber
                swapCounter++
            }
        }
        if (swapCounter === 0) {
            return unsortedNumbersArray
        }
    }
    return unsortedNumbersArray
}