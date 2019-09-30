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
}

module.exports = BST;