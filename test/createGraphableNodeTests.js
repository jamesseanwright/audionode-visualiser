'use strict';

const sinon = require('sinon');
const { expect } = require('chai');
const graphState = require('../src/graphState');
const createGraphableNode = require('../src/createGraphableNode');

describe('the createGraphableNode function', function () {
    let mockGraphState;

    beforeEach(function () {
        mockGraphState = sinon.mock(graphState);
    });

    afterEach(function () {
        mockGraphState.restore();
    });

    it('should proxy an AudioNode`s connect method and add it, with the target node, to the graph state', function () {
        const sourceNode = {
            connect: sinon.spy()
        };

        const graphableNode = createGraphableNode(sourceNode);
        const targetNode = {};

        mockGraphState.expects('add')
            .once()
            .withArgs(sourceNode, targetNode);

        graphableNode.connect(targetNode);

        mockGraphState.verify();
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
