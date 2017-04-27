"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var ADD_POSITION = exports.ADD_POSITION = 'ADD_POSITION';
var ADD_VERTICES = exports.ADD_VERTICES = 'ADD_VERTICES';

var addPosition = exports.addPosition = function addPosition(x, y) {
  return {
    type: ADD_POSITION,
    x: x,
    y: y
  };
};

var addVertices = exports.addVertices = function addVertices(...vertices) {
  return {
    type: ADD_VERTICES,
    vertices: vertices
  };
};
