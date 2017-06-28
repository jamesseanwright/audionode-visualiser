'use strict';

const Node = require('./node');

class Graph extends Node {
    constructor(rootValue) {
        super(rootValue);
    }

    addValue(sourceValue, targetValue) {
        const targetNode = new Node(targetValue);
        const existingSourceNode = this._findNodeByValue(sourceValue);

        if (existingSourceNode) {
            existingSourceNode.add(targetNode);
        } else {
            const sourceNode = new Node(sourceValue);
            sourceNode.add(targetNode);
            this.add(sourceNode);
        }
    }

    _findNodeByValue(value, node = this) {
        if (node.containsValue(value)) {
            return node;
        }

        for (let childNode of (node.children || [])) {
            let foundNode = this._findNodeByValue(value, childNode);

            if (foundNode) {
                return foundNode;
            }
        }

        return null;
    }
}

module.exports = new Graph('foo');
module.exports.Graph = Graph;
