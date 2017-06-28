'use strict';

const graph = require('./graph/graph');

function createGraphableConnect(audioNode) {
    return function graphableConnect(targetNode) {
        graph.add(audioNode, targetNode);
        audioNode.connect(targetNode);
    };
}

function createGraphableNode(audioNode) {
    return new Proxy(audioNode, {
        get(node, prop) {
            if (prop !== 'connect') return node[prop];

            return createGraphableConnect(node);
        }
    });
}

module.exports = createGraphableNode;
