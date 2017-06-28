const { expect } = require('chai');
const Node = require('../node');

describe('the Node class', function () {
    describe('the add method', function () {
        it('should add the specified node to the node against which the method was called', function () {
            const node = new Node();
            const nodeToAdd = new Node();

            node.add(nodeToAdd);

            const children = node.children;

            expect(children.length).to.equal(1);
            expect(children[0]).to.equal(nodeToAdd);
        });
    });

    describe('the containsValue method', function () {
        it('should return true if the passed value or reference is held by the node', function () {
            const value = {};
            const node = new Node(value);
            const containsValue = node.containsValue(value);

            expect(containsValue).to.be.true;
        });

        it('should return false if the passed value is not held by the node', function () {
            const node = new Node(1);
            const containsValue = node.containsValue(2);

            expect(containsValue).to.be.false;
        });
    });

    describe('the toString method', function () {
        it('should return the name of the value`s constructor', function () {
            const node = new Node('wibble');
            const expectedResult = 'String';
            const actualResult = node.toString();

            expect(actualResult).to.equal(expectedResult);
        });
    });
});
