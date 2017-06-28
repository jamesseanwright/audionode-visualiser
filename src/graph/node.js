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

    toString() {
        return this._value.constructor.name;
    }

    get children() {
        return [].concat(this._children);
    }
}

module.exports = Node;
