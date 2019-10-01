const BST = require('./BST')

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
    if (item == value) { return { index, count, item } }
    else if (item < value) { return binarySearch(array, value, index + 1, end) }
    else if (item > value) { return binarySearch(array, value, start, index - 1) }
}
let count = 0
//console.log('index:',binarySearch([3, 5, 6, 8, 11, 12, 14, 15, 17, 18], 8), 'count:', count)  // index: 3,  count: 3
//console.log('index:',binarySearch([3, 5, 6, 8, 11, 12, 14, 15, 17, 18], 16), 'count:', count) // index: -1, count: 8

module.exports = binarySearch;

function main() {
    const binarySearchTree = new BST
    binarySearchTree.insert(25, 25)
    binarySearchTree.insert(15, 15)
    binarySearchTree.insert(50, 50)
    binarySearchTree.insert(10, 10)
    binarySearchTree.insert(24, 24)
    binarySearchTree.insert(35, 35)
    binarySearchTree.insert(70, 70)
    binarySearchTree.insert(4, 4)
    binarySearchTree.insert(12, 12)
    binarySearchTree.insert(18, 18)
    binarySearchTree.insert(31, 31)
    binarySearchTree.insert(44, 44)
    binarySearchTree.insert(66, 66)
    binarySearchTree.insert(90, 90)
    binarySearchTree.insert(22, 22)
    //console.log(binarySearchTree.preOrder())
    //console.log(binarySearchTree.inOrder())
    //console.log(binarySearchTree.postOrder())
    const commandingOfficer = new BST
    commandingOfficer.insert(50, 'Captain Picard')
    commandingOfficer.insert(25, 'Commander Riker ')
    commandingOfficer.insert(75, 'Commander Data')
    commandingOfficer.insert(10, 'Lt. Cmdr. Worf')
    commandingOfficer.insert(30, 'Lt. Cmdr. LaForge')
    commandingOfficer.insert(85, 'Lt. Cmdr. Crusher')
    commandingOfficer.insert(80, 'Lieutenant Selar')
    commandingOfficer.insert(5, 'Lieutenant security-officer')
    //console.log(commandingOfficer.breadthFirstSearch()) // find next in command
    const maxProfit = new BST
    maxProfit.insert(128, 1)
    maxProfit.insert(97, 2)
    maxProfit.insert(121, 3)
    maxProfit.insert(123, 4)
    maxProfit.insert(98, 5)
    maxProfit.insert(97, 6)
    maxProfit.insert(105, 7)
    console.log(maxProfit.findMaxProfit()) // uses breadth first search. outputs buy at: 97 sell at: 123
}
main()