'use strict';

const { expect } = require('chai');
const createStubGraph = require('./createStubGraph');
const adaptToD3Hierarchy = require('../adaptToD3Hierarchy');

describe('the adaptToD3Hierarchy function', function () {
    it('should adapt a Graph instance into a D3 hierarchical layout, using constructor names', function () {
        const { graph } = createStubGraph();

        const expectedHierarchy = {
            name: 'String',
            children: [
                {
                    name: 'Number',
                    children: [
                        { name: 'Number', children: [] },
                        { name: 'Number', children: [] },
                        { name: 'Number', children: [] },
                    ]
                },

                {
                    name: 'Number',
                    children: [
                        { name: 'Number', children: [] },
                        { name: 'Number', children: [] },
                        { name: 'Number', children: [] },
                    ]
                }
            ]
        };

        const actualHierarchy = adaptToD3Hierarchy(graph);
        expect(actualHierarchy).to.deep.equal(expectedHierarchy);
    });
});
