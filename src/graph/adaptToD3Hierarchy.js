'use strict';

function adaptToD3Hierarchy(node) {
    console.log('********', node.toString());

    const d3Node = {
        name: node.toString()
    };

    if (node.children) {
        d3Node.children = node.children.map(adaptToD3Hierarchy);
    }

    return d3Node;
}

module.exports = adaptToD3Hierarchy;
