const BST = require('../DSA-BST/BST')

function binarySearch(array, value, start, end) {
    count ++
    //define start and end
    start = start === undefined ? 0 : start
    end = end === undefined ? array.length : end

    // didn't find index that matches value
    if (start > end) { return -1 }

    // define index and item
    const index = Math.floor((start + end) / 2)
    const item = array[index]

    // if found/too low/too high
    if (item == value) { return index }
    else if (item < value) { return binarySearch(array, value, index + 1, end) }
    else if (item > value) { return binarySearch(array, value, start, index - 1) }
    
}
let count = 0
console.log('index:',binarySearch([3, 5, 6, 8, 11, 12, 14, 15, 17, 18], 8), 'count:', count)  // index: 3,  count: 3
console.log('index:',binarySearch([3, 5, 6, 8, 11, 12, 14, 15, 17, 18], 16), 'count:', count) // index: -1, count: 8