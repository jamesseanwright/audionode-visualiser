'use strict';

const Graph = require('./graph');
const Node = require('./node');

class GraphState {
    constructor(graph = new Graph()) {
        this._graph = graph;
    }

    add(sourceValue, targetValue) {
        const targetNode = new Node(targetValue);
        const existingSourceNode = this._graph.findNodeByValue(sourceValue);

        if (existingSourceNode) {
            existingSourceNode.add(targetNode);
        } else {
            const sourceNode = new Node(sourceValue);
            sourceNode.add(targetNode);
            this._graph.add(sourceNode);
        }
    }
}

module.exports = new GraphState();
module.exports.GraphState = GraphState;
