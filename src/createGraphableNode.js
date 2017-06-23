'use strict';

function createGraphableConnect(audioNode) {
	return function graphableConnect(targetNode) {
		audioNode.connect(targetNode);
    };
}

function createGraphableNode(audioNode) {
	return new Proxy(audioNode, {
        get(node, prop) {
        	if (prop !== 'connect') return;

			return createGraphableConnect(node);
        }
    });
}

module.exports = createGraphableNode;
