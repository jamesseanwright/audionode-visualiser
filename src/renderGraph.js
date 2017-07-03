'use strict';

const d3Hierarchy = require('d3-hierarchy');
const d3Selection = require('d3-selection');
const graph = require('./graph/graph');
const adaptToD3Hierarchy = require('./graph/adaptToD3Hierarchy');

const MARGIN = 50;

function createSvg(targetElementSelector, width, height) {
    return d3Selection.select(targetElementSelector)
        .append('svg')
        .attr('width', width)
        .attr('height', height);
}

function renderLinks(nodes, group) {
    group.selectAll('.link')
        .data(nodes)
        .enter()
        .append('path')
        .attr('class', 'link')
        .attr('d', computePathDescription);
}

function renderNodes(nodes, group) {
    const renderedNodes = group.selectAll('.node')
        .data(nodes)
        .enter()
        .append('g')
        .attr('class', 'node')
        .attr('transform', d => `translate(${d.y},${d.x})`);

    renderedNodes.append('circle')
        .attr('r', 10);

    renderedNodes.append('text')
        .text(d => d.data.name);
}

function computePathDescription(d) {
    const xOffset = d.parent ? d.parent.x : 0;
    const yOffset = d.parent ? d.parent.y : 0;
    const curveYPos = (d.y + yOffset) / 2;

    return `M${d.y},${d.x}C${curveYPos},${d.x} ${curveYPos},${xOffset} ${yOffset},${xOffset}`;
}

function renderGraph(targetElementSelector) {
    const width = window.innerWidth - MARGIN;
    const height = window.innerHeight - MARGIN;
    const hierarchy = d3Hierarchy.hierarchy(adaptToD3Hierarchy(graph));
    const tree = d3Hierarchy.tree().size([height, width]);
    const svg = createSvg(targetElementSelector, width, height);
    const group = svg.append('g');
    const nodes = tree(hierarchy);
    const descendants = nodes.descendants();

    renderLinks(descendants, group);
    renderNodes(descendants, group);
}

module.exports = renderGraph;
