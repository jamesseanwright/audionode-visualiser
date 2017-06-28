'use strict';

const sinon = require('sinon');
const { expect } = require('chai');
const graph = require('../graph/graph');
const createGraphableNode = require('../createGraphableNode');

describe('the createGraphableNode function', function () {
    let mockGraph;

    beforeEach(function () {
        mockGraph = sinon.mock(graph);
    });

    afterEach(function () {
        mockGraph.restore();
    });

    it('should proxy an AudioNode`s connect method and add it, with the target node, to the graph', function () {
        const sourceNode = {
            connect: sinon.spy()
        };

        const graphableNode = createGraphableNode(sourceNode);
        const targetNode = {};

        mockGraph.expects('add')
            .once()
            .withArgs(sourceNode, targetNode);

        graphableNode.connect(targetNode);

        mockGraph.verify();
        expect(sourceNode.connect.calledOnce).to.be.true;
        expect(sourceNode.connect.calledWith(targetNode)).to.be.true;
    });

    it('should transparently forward any property other than `connect`', function () {
        const sourceNode = {
            foo: 'bar'
        };

        const graphableNode = createGraphableNode(sourceNode);

        expect(graphableNode.foo).to.equal('bar');
    });
});
