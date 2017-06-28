'use strict';

const { expect } = require('chai');
const { GraphState } = require('../graphState');
const Graph = require('../graph');

describe('the GraphState class', function () {
    function assertNodeEquality(node, value) {
        return node.containsValue(value);
    }

    let graph;
    let graphState;

    beforeEach(function () {
        graph = new Graph();
        graphState = new GraphState(graph);
    });

    describe('the add method', function () {
        it('should wrap the raw source and target values as nodes and add them to the graph', function () {
            const sourceValue = 3;
            const targetValue = 6;

            graphState.add(sourceValue, targetValue);

            const sourceNode = graph.findNodeByValue(sourceValue);
            const targetNode = graph.findNodeByValue(targetValue);

            expect(assertNodeEquality(sourceNode, sourceValue)).to.be.true;
            expect(assertNodeEquality(targetNode, targetValue)).to.be.true;
            expect(sourceNode.children[0]).to.equal(targetNode);
        });
    });
});
