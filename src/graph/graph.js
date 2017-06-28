'use strict';

const Node = require('./node');

class Graph extends Node {
    constructor(rootValue) {
        super(rootValue);
    }

    findNodeByValue(value, node = this) {
        if (node.containsValue(value)) {
            return node;
        }

        for (let childNode of (node.children || [])) {
            let foundNode = this.findNodeByValue(value, childNode);

            if (foundNode) {
                return foundNode;
            }
        }

        return null;
    }
}

module.exports = Graph;
