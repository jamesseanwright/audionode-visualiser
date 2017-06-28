'use strict';

const d3 = require('d3-hierarchy');
const graph = require('./graph/graph');
const adaptToD3Hierarchy = require('./graph/adaptToD3Hierarchy');

function renderGraph(/* targetElement */) {
    const hierarchy = adaptToD3Hierarchy(graph);
    const treemap = d3.treemap().size([window.innerWidth, window.innerHeight]).padding(2);
    treemap(hierarchy);
}

module.exports = renderGraph;
