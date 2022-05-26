const countChar = (string) => {
    const lowerString = string.toLowerCase()
    const stringTest = lowerString.split('')
    const stringArray = stringTest.filter(char => char != ' ') //remove blank spaces
    charObject = {}
    for (let char of stringArray) {
        if (char in charObject) {
            charObject[char] += 1
        } else {
            charObject[char] = 1
        }}
    return charObject //object with key as char and values as number of occurrences
}

exports.charCount = function(str) {
    const charObject = countChar(str)
    const sortedArray = Object.entries(charObject).sort((current,next) => next[1] - current[1]) //sorted array of arrays based on value, ascending
    let output = []

    let sameGroup = []
    for (let i = 0; i < sortedArray.length -1; i++) {
        const currentElt = sortedArray[i]
        const nextElt = sortedArray[i+1]

        if (currentElt[1] === nextElt[1]) { //want to group all same value to sort keys based on abc
            if (sameGroup.includes(currentElt)) {
                sameGroup.push(nextElt)} 
            else {
                sameGroup.push(currentElt,nextElt)}
            }
        else { //no longer same value
            const sortGroup = sameGroup.sort((current,next) => current[0].localeCompare(next[0]))
            output = output.concat(sortGroup)

            if (!output.includes(currentElt)) {
                output.push(currentElt)
            }
            sameGroup = [] //reset for next grouping
        }
    }
    let sorted = sameGroup.sort((current,next) => current[0].localeCompare(next[0]))
    output = output.concat(sorted) //account for last group, in case last chunk all same value
    let lastElt = sortedArray.pop(-1) //account for last elt b/c for loop don't go to last
    if (!output.includes(lastElt)) {
        output.push(lastElt)
    }
    return output

};
// let result_2 = exports.charCount("an apple a day will keep the doctor away")
// console.log(result_2)
// console.log(exports.charCount("aaabbc"))
// console.log(result_1[0][0] === "a")
// console.log(result_1[0][1] === 3)
// console.log(result_1[1][0] === "b")
// console.log(result_1[1][1] === 2)
// console.log(result_1[2][0] === "c")
// console.log(result_1[2][1] === 1)


// console.log(result_2[0][0] === "a")
// console.log(result_2[0][1] === 6)
// console.log(result_2[1][0] === "e")
// console.log(result_2[1][1] === 4)
// console.log(result_2[2][0] === "l")
// console.log(result_2[2][1] === 3)
// console.log(result_2[3][0] === "p")
// console.log(result_2[3][1] === 3)
// console.log(result_2[4][0] === "d")
// console.log(result_2[4][1] === 2)
// console.log(result_2[5][0] === "o")
// console.log(result_2[5][1] === 2)
// console.log(result_2[6][0] === "t")
// console.log(result_2[6][1] === 2)
// console.log(result_2[7][0] === "w", 'here1', result_2[7][0])
// console.log(result_2[7][1] === 2)
// console.log(result_2[8][0] === "y")
// console.log(result_2[8][1] === 2)
// console.log(result_2[9][0] === "c")
// console.log(result_2[9][1] === 1)
// console.log(result_2[10][0] === "h")
// console.log(result_2[10][1] === 1)
// console.log(result_2[11][0] === "i")
// console.log(result_2[11][1] === 1)
// console.log(result_2[12][0] === "k")
// console.log(result_2[12][1] === 1)
// console.log(result_2[13][0] === "n")
// console.log(result_2[13][1] === 1)
// console.log(result_2[14][0] === "r")
// console.log(result_2[14][1] === 1)