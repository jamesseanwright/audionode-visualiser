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
        target: childIndex,
    };
}

function adaptToD3GraphData(nodes, graphData = initialData, parentIndex = 0) {
    for (let i = 0; i < nodes.length; i++) {
        const node = nodes[i];
        const childIndex = graphData.nodes.length;

        graphData.nodes = graphData.nodes.concat(mapNode(node));
        graphData.links = graphData.links.concat(createLink(parentIndex, childIndex));

        if (node.children.length) {
            adaptToD3GraphData(node.children, graphData, childIndex);
        }
    }

    return graphData;
}

module.exports = adaptToD3GraphData;
