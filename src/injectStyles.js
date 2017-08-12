'use strict';

const styles = `
    .node circle {
        fill: #fff;
        stroke: steelblue;
        stroke-width: 3px;
        r: 20px;
    }

    .node text {
        font: 12px sans-serif;
    }

    .link {
        fill: none;
        stroke: #ccc;
        stroke-width: 2px;
    }

    .text {
        stroke: black;
    }
`;

module.exports = function injectStyles() {
    const styleTarget = document.createElement('style');
    styleTarget.textContent = styles;
    document.head.appendChild(styleTarget);
};