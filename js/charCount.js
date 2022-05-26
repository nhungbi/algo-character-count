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
            if (sameGroup.includes(currentElt)) { //already include current so just add next only
                sameGroup.push(nextElt)} 
            else {
                sameGroup.push(currentElt,nextElt)}
            }
        else { //no longer same value/group, so can cocat to output and reset group 
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