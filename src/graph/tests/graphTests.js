'use strict';

const { expect } = require('chai');
const createStubGraph = require('./createStubGraph');
const { Graph } = require('../graph');


describe('the Graph class', function () {
    function assertNodeEquality(node, value) {
        return node.containsValue(value);
    }

    describe('the addValue method', function () {
        let graph;

        beforeEach(function () {
            graph = new Graph();
        });

        it('should wrap the raw source and target values as nodes and add them to the graph', function () {
            const sourceValue = 3;
            const targetValue = 6;

            graph.addValue(sourceValue, targetValue);

            const sourceNode = graph._findNodeByValue(sourceValue);
            const targetNode = graph._findNodeByValue(targetValue);

            expect(assertNodeEquality(sourceNode, sourceValue)).to.be.true;
            expect(assertNodeEquality(targetNode, targetValue)).to.be.true;
            expect(sourceNode.children[0]).to.equal(targetNode);
        });

        it('should add the target as a child of an existing source node that matches the source value', function () {
            const sourceValue = 3;
            const firstTargetValue = 6;
            const secondTargetValue = 8;

            graph.addValue(sourceValue, firstTargetValue);
            graph.addValue(sourceValue, secondTargetValue);

            const sourceNode = graph._findNodeByValue(sourceValue);
            const firstTargetNode = graph._findNodeByValue(firstTargetValue);
            const secondTargetNode = graph._findNodeByValue(secondTargetValue);

            expect(assertNodeEquality(sourceNode, sourceValue)).to.be.true;
            expect(assertNodeEquality(firstTargetNode, firstTargetValue)).to.be.true;
            expect(assertNodeEquality(secondTargetNode, secondTargetValue)).to.be.true;
            expect(sourceNode.children.length).to.equal(2);
            expect(sourceNode.children[0]).to.equal(firstTargetNode);
            expect(sourceNode.children[1]).to.equal(secondTargetNode);
        });

        it('should add an existing target as a child of multiple sources if target is already in the graph', function () {
            const firstSourceValue = 3;
            const secondSourceValue = 4;
            const targetValue = 6;

            graph.addValue(firstSourceValue, targetValue);
            graph.addValue(secondSourceValue, targetValue);

            const firstSourceNode = graph._findNodeByValue(firstSourceValue);
            const secondSourceNode = graph._findNodeByValue(secondSourceValue);
            const targetNode = graph._findNodeByValue(targetValue);

            expect(firstSourceNode.children[0]).to.equal(targetNode);
            expect(secondSourceNode.children[0]).to.equal(targetNode);
        });
    });

    // An implementation detail, but testing due to complexity
    describe('the _findNodeByValue method', function () {
        const { graph, secondGenLeftNodes } = createStubGraph();

        it('should find a node by a particular value', function () {
            const expectedNode = secondGenLeftNodes[2];
            const actualNode = graph._findNodeByValue(8);

            expect(actualNode).to.equal(expectedNode);
        });

        it('should return null if a particular value cannot be found', function () {
            const actualNode = graph._findNodeByValue(77);
            expect(actualNode).to.be.null;
        });
    });
});
