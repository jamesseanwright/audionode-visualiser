'use strict';

const Graph = require('./graph');
const Node = require('./node');

class GraphState {
    constructor(graph = new Graph()) {
        this._graph = graph;
    }

    add(sourceValue, targetValue) {
        const sourceNode = new Node(sourceValue);
        const targetNode = new Node(targetValue);

        sourceNode.add(targetNode);
        this._graph.add(sourceNode);
    }
}

module.exports = new GraphState();
module.exports.GraphState = GraphState;
