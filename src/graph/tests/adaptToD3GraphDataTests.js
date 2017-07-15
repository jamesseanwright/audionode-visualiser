'use strict';

const { expect } = require('chai');
const createStubGraph = require('./createStubGraph');
const adaptToD3GraphData = require('../adaptToD3GraphData');

describe('the adaptToD3GraphData function', function () {
    it('should adapt a Graph instance into the contract required by D3`s force-directed graph', function () {
        const { graph } = createStubGraph();

        const expectedData = {
            nodes: [
                { name: 'String' },
                { name: 'Number' },
                { name: 'Number' },
                { name: 'Number' },
                { name: 'Number' },
                { name: 'Number' },
                { name: 'Number' },
                { name: 'Number' },
                { name: 'Number' },
            ],

            links: [
                { source: 0, target: 1 },
                { source: 0, target: 2 },
                { source: 1, target: 3 },
                { source: 1, target: 4 },
                { source: 1, target: 5 },
                { source: 2, target: 6 },
                { source: 2, target: 7 },
                { source: 2, target: 8 },
            ]
        };

        const actualData = adaptToD3GraphData(graph);
        expect(actualData).to.deep.equal(expectedData);
    });
});
