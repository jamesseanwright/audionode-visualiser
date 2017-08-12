'use strict';

const d3Force = require('d3-force');
const d3Selection = require('d3-selection');
const graph = require('./graph/graph');
const adaptToD3GraphData = require('./graph/adaptToD3GraphData');
const injectStyles = require('./injectStyles');

function createSvg(targetElementSelector, width, height) {
    return d3Selection.select(targetElementSelector)
        .append('svg')
        .attr('width', width)
        .attr('height', height);
}

function renderNodes(svg, nodes) {
    return svg.append('g')
        .attr('class', 'node')
        .selectAll('circle')
        .data(nodes)
        .enter()
        .append('circle');
}

function renderText(svg, nodes) {
    return svg.append('g')
        .attr('class', 'text')
        .selectAll('text')
        .data(nodes)
        .enter()
        .append('text')
        .text(n => n.name);
}

function renderLinks(svg, links) {
    return svg.append('g')
        .attr('class', 'link')
        .selectAll('line')
        .data(links)
        .enter()
        .append('line');
}

function tick(renderedNodes, renderedText, renderedLinks) {
    renderedNodes.attr('cx', n => n.x)
        .attr('cy', n => n.y);

    renderedText.attr('x', n => n.x)
        .attr('y', n => n.y);

    renderedLinks.attr('x1', d => d.source.x);
    renderedLinks.attr('y1', d => d.source.y);
    renderedLinks.attr('x2', d => d.target.x);
    renderedLinks.attr('y2', d => d.target.y);
}

function renderGraph(targetElementSelector) {
    injectStyles();

    const width = window.innerWidth;
    const height = window.innerHeight;
    const svg = createSvg(targetElementSelector, width, height);
    const { nodes, links } = adaptToD3GraphData([graph]);
    const simulation = d3Force.forceSimulation(nodes);

    const renderedNodes = renderNodes(svg, nodes);
    const renderedText = renderText(svg, nodes);
    const renderedLinks = renderLinks(svg, links);

    simulation.force('link', d3Force.forceLink(links));
    simulation.force('center', d3Force.forceCenter(width / 2, height / 2));
    simulation.force('charge', d3Force.forceManyBody().strength(-500));
    simulation.force('x', d3Force.forceX(0));
    simulation.force('y', d3Force.forceY(0));
    simulation.on('tick', () => tick(renderedNodes, renderedText, renderedLinks));
}

module.exports = renderGraph;
