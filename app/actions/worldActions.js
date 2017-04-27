"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var ADD_WORLD = exports.ADD_WORLD = 'ADD_WORLD';

var addWorld = exports.addWorld = function addWorld(players, rules) {
  return {
    type: ADD_WORLD,
    players: players,
    rules: rules
  };
};
