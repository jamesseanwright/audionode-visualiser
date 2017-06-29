'use strict';

// const d3Hierarchy = require('d3-hierarchy');
// const d3Selection = require('d3-selection');
// const graph = require('./graph/graph');
// const adaptToD3Hierarchy = require('./graph/adaptToD3Hierarchy');

// function createSvg(targetElementSelector) {
//     return d3Selection.selector(targetElementSelector)
//         .append('svg')
//         .attr('width', innerWidth)
//         .attr('height', innerHeight)
//         .append('g');
// }

function renderGraph(/*targetElementSelector*/) {
    return false;
    // const { innerWidth, innerHeight } = window;
    // const hierarchy = d3Hierarchy.hierarchy(adaptToD3Hierarchy(graph));
    // const tree = d3Hierarchy.tree().size([innerWidth, innerHeight]);
    // const svg = createSvg(targetElementSelector);

    // tree(hierarchy);
    // return tree;
}

module.exports = renderGraph;
