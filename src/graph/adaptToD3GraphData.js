'use strict';

function adaptToD3GraphData(node) {
    const d3Node = {
        name: node.toString()
    };

    if (node.children) {
        d3Node.children = node.children.map(adaptToD3GraphData);
    }

    return d3Node;
}

module.exports = adaptToD3GraphData;
