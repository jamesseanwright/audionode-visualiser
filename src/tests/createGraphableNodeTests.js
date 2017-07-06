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

        mockGraph.expects('addValue')
            .once()
            .withArgs(sourceNode, targetNode);

        graphableNode.connect(targetNode);

        mockGraph.verify();
        expect(sourceNode.connect.calledOnce).to.be.true;
        expect(sourceNode.connect.calledWith(targetNode)).to.be.true;
    });

    it('should use the target node`s target property if it`s a Proxy', function () {
        const sourceNode = {
            connect: sinon.spy()
        };

        const targetNode = {
            connect() {}
        };

        const graphableSourceNode = createGraphableNode(sourceNode);
        const graphableTargetNode = createGraphableNode(targetNode);

        graphableSourceNode.connect(graphableTargetNode);

        expect(sourceNode.connect.calledOnce).to.be.true;
        expect(sourceNode.connect.calledWith(targetNode)).to.be.true;
    });

    it('should return the underlying AudioNode when the `target` property is requested', function () {
        const sourceNode = {};
        const graphableNode = createGraphableNode(sourceNode);

        expect(graphableNode.target).to.equal(sourceNode);
    });

    it('should transparently forward any other property', function () {
        const sourceNode = {
            foo: 'bar'
        };

        const graphableNode = createGraphableNode(sourceNode);

        expect(graphableNode.foo).to.equal('bar');
    });

});
