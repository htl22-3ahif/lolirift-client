"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var ADD_UNIT = exports.ADD_UNIT = 'ADD_UNIT';

var addUnit = exports.addUnit = function addUnit(vertices, position, /*actions, state,*/ owner) {
  return {
    type: ADD_UNIT,
    vertices: vertices,
    position: position,
    // actions: TODO: implement,
    // state: TODO: implement,
    owner: owner
  };
};

var addUnits = exports.addUnits = function addUnits(units) {
  return {
    type: ADD_UNITS,
    units: units
  };
};
