"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var ADD_PLAYER = exports.ADD_PLAYER = 'ADD_PLAYER';
var ADD_PLAYERS = exports.ADD_PLAYERS = 'ADD_PLAYERS';

var addPlayer = exports.addPlayer = function addPlayer(name, pass) {
  return {
    type: ADD_PLAYER,
    name: name,
    pass: pass
  };
};
