const Queue = require('./Queue')

class BST {
    constructor(key = null, value = null, parent = null){
        this.key = key
        this.value = value
        this.parent = parent
        this.left = null
        this.right = null
    }

    insert(key, value) {
        // this node is empty
        if (!this.key) {
            this.key = key
            this.value = value
        }
        // move to left branch
        else if (key < this.key) {
            // left child empty
            if (!this.left) { this.left = new BST(key, value, this) }
            // left child not empty, recurrsive call to left node
            else { this.left.insert(key, value) }
        }
        // move to right branch
        else {
            // right child empty
            if (!this.right) { this.right = new BST(key, value, this) }
            // right child not empty, recurrsive call to right node
            else { this.right.insert(key, value) }
        }
    }

    find(key) {
        // this nodes key matches
        if (this.key == key) { return {key: this.key, value: this.value} }
        // move to left if less and left exist
        else if (key < this.key && this.left) { return this.left.find(key) }        
        // move to right if greater and right exist
        else if (key > this.key && this.right) { return this.right.find(key) }
        else { throw new Error('Key not found') }
    }

    remove(key) {
        // this nodes key matches
        if (this.key == key) {
            // has left & right child
            if (this.left && this.right) {
                // define successor, replace with successor, then remove successor
                const successor = this.right._findMin()
                this.key = successor.key
                this. value = successor.value
                successor.remove(successor.key)
            }
            // only left child
            else if (this.left) { this._replaceWith(this.left) }
            // only right
            else if (this.right) { this._replaceWith(this.right) }
            // no children
            else { this._replaceWith(null) }
        }
        // move to left
        else if (key < this.key && this.left) { this.left.remove(key) }
        else if (key > this.key && this.right) { this.right.remove(key) }
        else { throw new Error('key not found') }
    }

    _replaceWith(node) {
        // has parent
        if (this.parent) {
            // replace connection between this node and parent node with child
            if (this == this.parent.left) { this.parent.left = node }
            else if (this == this.parent.right) { this.parent.right = node }
            if (node) { node.parent = this.parent }
        }
        // no parent
        else {
            // replace key, value, left, right with node or null
            if (node) {
                this.key = node.key
                this.value = node.value
                this.left = node.left
                this.right = node.right
            }
            else {
                this.key = null
                this.value = null
                this.left = null
                this.right = null
            }
        }
    }

    _findMin() {
        // move down tree till you hit a leaf node (last node)
        if (!this.left) { return this }
        return this.left._findMin()
    }

    _findMax() {
        if (!this.right) { return this }
        return this.right._findMax()
    }

    preOrder(values = []) {
        // root
        values.push(this.value)
        // left child
        if (this.left) { values = this.left.preOrder(values) }
        // right child
        if (this.right) { values = this.right.preOrder(values) }
        // return values
        return values
    }

    inOrder(values = []) {
        // left child
        if (this.left) { values = this.left.inOrder(values) }
        // root
        values.push(this.value)
        // right child
        if (this.right) { values = this.right.inOrder(values) }
        // return values
        return values
    }

    postOrder(values = []) {
        // left child
        if (this.left) { values = this.left.postOrder(values) }
        // right child
        if (this.right) { values = this.right.postOrder(values) }
        // root
        values.push(this.value)
        // return values
        return values
    }

    breadthFirstSearch(values = []) {
        const queue = new Queue()
        const node = this
        queue.enqueue(node)
        while (queue.length) {
            const node = queue.dequeue() //remove from the queue
            values.push(node.value) // add that value from the queue to an array

            if (node.left) {
                queue.enqueue(node.left) //add left child to the queue
            }

            if (node.right) {
                queue.enqueue(node.right) // add right child to the queue
            }
        }
        return values
    }

    findMaxProfit() {
        const queue = new Queue()
        const node = this
        let buy = this
        let sell = this.right || this.left
        queue.enqueue(node)
        while (queue.length) {
            //remove from the queue
            const node = queue.dequeue()
            // smallest value
            if (buy.key > node.key) { buy = node }
            // largest value that isn't root and is later in array
            if (node.parent && sell.value < node.value && sell.key < node.key) { sell = node }
            
            if (node.left) {
                //add left child to the queue
                queue.enqueue(node.left)
            }

            if (node.right) {
                // add right child to the queue
                queue.enqueue(node.right)
            }
        }
        return `buy at: ${buy.key} sell at: ${sell.key}`
    }
}

// Egg drop answer - none :) full answer on readme

module.exports = BST;