'use strict';

const { expect } = require('chai');
const createStubGraph = require('./createStubGraph');
const adaptToD3GraphData = require('../adaptToD3GraphData');

describe('the adaptToD3GraphData function', function () {
    it('should adapt a Graph instance into a D3 graph layout', function () {
        const { graph } = createStubGraph();

        const expectedData = {
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

        const actualData = adaptToD3GraphData(graph);
        expect(actualData).to.deep.equal(expectedData);
    });
});
