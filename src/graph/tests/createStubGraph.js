'use strict';

const Graph = require('../graph');
const Node = require('../node');

function createStubGraph() {
    function addNodes(sourceNode, childNodes) {
        for (let childNode of childNodes) {
            sourceNode.add(childNode);
        }
    }

    const graph = new Graph();

    const firstGenNodes = [
        new Node(1),
        new Node(7)
    ];

    const secondGenLeftNodes = [
        new Node(6),
        new Node(4),
        new Node(8)
    ];

    const secondGenRightNodes = [
        new Node(20),
        new Node(9),
        new Node(45)
    ];

    addNodes(graph, firstGenNodes);
    addNodes(firstGenNodes[0], secondGenLeftNodes);
    addNodes(firstGenNodes[1], secondGenRightNodes);

    return {
        graph,
        firstGenNodes,
        secondGenLeftNodes,
        secondGenRightNodes
    };
}

module.exports = createStubGraph;
