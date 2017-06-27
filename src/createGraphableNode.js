'use strict';

const graphState = require('./graphState');

function createGraphableConnect(audioNode) {
    return function graphableConnect(targetNode) {
        graphState.add(audioNode, targetNode);
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
