'use strict';

const { createGraphableNode, renderGraph } = require('../../src');

const context = new AudioContext();
const oscillator = createGraphableNode(context.createOscillator());
const panner = createGraphableNode(context.createStereoPanner());
const convolver = createGraphableNode(context.createConvolver());
const destination = createGraphableNode(context.destination);

oscillator.connect(panner);
oscillator.connect(convolver);
panner.connect(destination);
convolver.connect(destination);

renderGraph('#audio-graph-visualisation');
