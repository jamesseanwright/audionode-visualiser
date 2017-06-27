'use strict';

class Node {
    constructor(value) {
        this._value = value;
        this._children = [];
    }

    add(node) {
        this._children.push(node);
    }

    containsValue(value) {
        return this._value === value;
    }

    get children() {
        return [].concat(this._children);
    }
}

module.exports = Node;
