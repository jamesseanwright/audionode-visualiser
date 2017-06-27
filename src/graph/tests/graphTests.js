const { expect } = require('chai');
const Graph = require('../graph');
const Node = require('../node');

describe('the Graph class', function () {
    describe('the findNodeByValue method', function () {
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

        it('should find a node by a particular value', function () {
            const expectedNode = secondGenLeftNodes[2];
            const actualNode = graph.findNodeByValue(8);

            expect(actualNode).to.equal(expectedNode);
        });

        it('should return null if a particular value cannot be found', function () {
            const actualNode = graph.findNodeByValue(77);
            expect(actualNode).to.be.null;
        });
    });
});
