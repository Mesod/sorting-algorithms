module.exports = (numbersArray) => {
    let unsortedNumbersArray = Object.assign([], numbersArray)
    let arrayLength = unsortedNumbersArray.length
    let positionsArray = []
    // because of JS abilities, the first 2 level of iteration could be merged,
    // but it's done in the classic way just to not change the normal order
    // also it's assumed that the entry array of function is contained of 
    // positive or 0 numbers
    let sortedNumbersArray = []
    for (let i = 0; i < 3; i++) {
        switch (i) {
            case 0:
                let biggestNumber = unsortedNumbersArray[0]
                for (let i = 1; i < arrayLength; i++) {
                    if (biggestNumber < unsortedNumbersArray[i]) {
                        biggestNumber = unsortedNumbersArray[i]
                    }
                }
                fillBlankArray(positionsArray, biggestNumber + 1)
                break
            case 1:
                for (let i = 0; i < arrayLength; i++) {
                    positionsArray[unsortedNumbersArray[i]]++
                }
                for (let i = 1; i < positionsArray.length; i++) {
                    positionsArray[i] += positionsArray[i - 1]
                }
                break
            case 2:
                for (let i = 0; i < arrayLength; i++) {
                    sortedNumbersArray[positionsArray[unsortedNumbersArray[i]]-1] = unsortedNumbersArray[i]
                    positionsArray[unsortedNumbersArray[i]]--
                }

        }
    }
    return sortedNumbersArray
}

function fillBlankArray(blankArray, length) {
    for (let i = 0; i < length; i++) {
        blankArray[i] = 0
    }
}