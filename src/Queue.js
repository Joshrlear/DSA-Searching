class Queue {
    constructor() {
        this.first = null
        this.last = null
        this.length = 0
    }

    enqueue(data) {
        // create new node with data
        const node = new _Node(data)
        // is queue empty
        if (!this.first) { this.first = node }
        // queue not empty. insert node last
        if (this.last) { this.last.next = node }
        // update node as last
        this.last = node
        this.length ++
        return node
    }

    dequeue() {
        // queue empty
        if (!this.first) { return 'queue is empty'}
        // queue not empty
        // delcare node we wish to remove
        const node = this.first
        // reclassify the second node as the first node
        this.first = this.first.next
        // node we want to remove is the last node
        // declare last to null. to show empyt queue
        if (node === this.last) { this.last = null }
        this.length --
        return node.value
    }
}

class _Node {
    constructor(value) {
        this.value = value
        this.next = null
    }
}

module.exports = Queue;