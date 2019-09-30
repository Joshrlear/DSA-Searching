function LinearSearch(array, value) {
    let count = 0
    for (let i in array) {
        count ++
        if (array[i] == value) { return {index: i, count, item: array[i]} }
    }
    return {index: -1, count}
}

module.exports = LinearSearch;