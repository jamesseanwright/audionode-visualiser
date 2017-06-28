const { expect } = require('chai');

const createStubGraph = require('./createStubGraph');

describe('the Graph class', function () {
    const { graph, secondGenLeftNodes } = createStubGraph();

    describe('the findNodeByValue method', function () {
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
