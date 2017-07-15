'use strict';

const initialData = {
    nodes: [],
    links: [],
};

function mapNode(node) {
    return {
        name: node.toString()
    };
}

function adaptToD3GraphData(node, graphData = initialData) {
    graphData.nodes = graphData.nodes.concat(mapNode(node));

    const lastNodeIndex = data.nodes.length - 1;

    if (node.children) {
        graphData.nodes = graphData.nodes.concat(
            node.children.map(mapNode)
        );
    }

    return graphData;
}

module.exports = adaptToD3GraphData;
