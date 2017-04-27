"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var ADD_ACTION = exports.ADD_ACTION = 'ADD_ACTION';

var addAction = exports.addAction = function addAction(consequence, paramTypes) {
  return {
    type: ADD_ACTION,
    consequence: consequence,
    paramTypes: paramTypes
  };
};
