module.exports = (numbersArray) => {
    let unsortedNumbersArray = Object.assign([], numbersArray)
    for (let i = 1; i < unsortedNumbersArray.length; i++) {
        if (unsortedNumbersArray[i] >= unsortedNumbersArray[i - 1]) continue
        let selectedNumber = unsortedNumbersArray[i];
        let j = i
        while (unsortedNumbersArray[j-1] > selectedNumber) {
            unsortedNumbersArray[j] = unsortedNumbersArray[j-1]
            j--
        }
        unsortedNumbersArray[j] = selectedNumber
    }
    return unsortedNumbersArray
}