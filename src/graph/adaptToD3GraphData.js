'use strict';

const initialData = {
    nodes: [],
    links: [],
};

function mapNode(node) {
    return {
        name: node.toString(),
    };
}

function createLink(parentIndex, childIndex) {
    return {
        source: parentIndex,
        target: childIndex
    };
}

function adaptToD3GraphData(nodes, graphData = initialData, depth = 0) {
    for (let i = 0; i < nodes.length; i++) {
        const node = nodes[i];
        console.log('*******', node._value, depth, i, graphData.nodes.length); // eslint-disable-line

        graphData.nodes = graphData.nodes.concat(mapNode(node));
        graphData.links = graphData.links.concat(createLink(depth + node.children.length, graphData.nodes.length));

        if (node.children.length) {
            adaptToD3GraphData(node.children, graphData, depth + 1);
        }
    }

    return graphData;
}

module.exports = adaptToD3GraphData;
