"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

export const ADD_PLAYER = 'ADD_PLAYER';
export const ADD_PLAYERS = 'ADD_PLAYERS';

export const addPlayer = (name, pass) => {
  return {
    type: ADD_PLAYER,
    name: name,
    pass: pass
  };
};
