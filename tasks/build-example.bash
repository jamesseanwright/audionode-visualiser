#!/usr/bin/env bash

mkdir -p example/dist
browserify example/src/index.js -o example/dist/index.js
cp example/src/index.html example/dist
