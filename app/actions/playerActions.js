"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var ADD_PLAYER = exports.ADD_PLAYER = 'ADD_PLAYER';
var ADD_CONTESTANT = exports.ADD_CONTESTANT = 'ADD_CONTESTANT';
var ADD_CONTESTANTS = exports.ADD_CONTESTANTS = 'ADD_CONTESTANTS';

var addPlayer = exports.addPlayer = function addPlayer(name, pass) {
  return {
    type: ADD_PLAYER,
    name: name,
    pass: pass
  };
};

var addContestant = exports.addContestant = function addContestant(name) {
  return {
    type: ADD_CONTESTANT,
    name: name
  };
};

var addContestants = exports.addContestants = function addContestants(...names) {
  return {
    type: ADD_CONTESTANTS,
    names: names
  }
}
