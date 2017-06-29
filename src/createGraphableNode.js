'use strict';

const graph = require('./graph/graph');

function createGraphableConnect(audioNode) {
    return function graphableConnect(targetNode) {
        const { target = targetNode } = targetNode;
        graph.add(audioNode, targetNode);
        audioNode.connect(target);
    };
}

function createGraphableNode(audioNode) {
    return new Proxy(audioNode, {
        get(node, prop) {
            switch (prop) {
            case 'connect':
                return createGraphableConnect(node);

            case 'target':
                return node;

            default:
                return node[prop];
            }
        }
    });
}

module.exports = createGraphableNode;
