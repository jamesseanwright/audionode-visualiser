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
    for (let node of nodes) {
        const childIndex = graphData.nodes.length;

        graphData.nodes = graphData.nodes.concat(mapNode(node));

        if (childIndex > 0) {
            graphData.links = graphData.links.concat(createLink(parentIndex, childIndex));
        }

        if (node.children.length) {
            adaptToD3GraphData(node.children, graphData, childIndex);
        }
    }

    return graphData;
}

module.exports = adaptToD3GraphData;
