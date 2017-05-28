# lolirift client

## Prove your waifu is superior!

The lolirift-client offeers a way for users to connect to a [lolirift-server](https://github.com/UgiNyaa/lolirift-server) host, and enjoy a lolified take on real time strategy games.

## Getting Started

- have [node.js](https://nodejs.org/en/) installed
- open your terminal of choice that supports the [npm package manager](https://www.npmjs.com/) (usually the default one works, if you decided to let node.js add the command to your bash)
- clone the git repository for the client https://github.com/htl22-3ahif/lolirift-client.git
- cd into the repository
- execute `npm install` to install

### launching the client

- cd into the repository
- execute `npm start` to start

it's that easy!

### additional steps for hosting a local server

- clone the git repository for the client https://github.com/htl22-3ahif/lolirift-client.git
- cd into the repository
- execute `npm install` to install
- execute `npm start` to start

## Frameworks used

```
{
  "name": "lolirift-client",
  "version": "1.0.0",
  "description": "a client electron app for the soon-to-be hit lolirift",
  "main": "main.js",
  "scripts": {
    "start": "babel app -d build && electron .",
    "dev": "babel -w app -d build & electron ."
  },
  "keywords": [
    "Electron",
    "RTS"
  ],
  "author": "satorialist",
  "license": "MIT",
  "devDependencies": {
    "babel-cli": "^6.24.0",
    "babel-preset-env": "^1.3.2",
    "babel-preset-es2015": "^6.24.0",
    "babel-preset-react": "^6.23.0",
    "babel-preset-stage-1": "^6.22.0",
    "electron": "~1.6.2",
    "material-ui": "^0.17.1",
    "react": "^15.4.2",
    "react-dom": "^15.4.2",
    "react-redux": "^5.0.3",
    "react-tap-event-plugin": "^2.0.1",
    "redux": "^3.6.0",
    "ws": "^3.0.0"
  }
}
```

(as of 2017-05-28)

## Game Logic

The Game Logic that powers lolirift is a generalized concept that makes use of the web technologies' simplicity to exchange information and manage states in the game.

It is as follows...

### Structure
###### (courtesy of [UgiNyaa](https://github.com/UgiNyaa))

The structure of the lolirift world can easily be described through a JSON file (since everything here is based on JSON)

```
"world": {
  "players": [],
  "units": [],
  "actions": []
}
```

Firstly, the world contains a __players__ array, which holds all the players currently playing in the lolirift world. This is mainly used for management, very rarely for the acual world. So it will be used for authentication, so that one player can not controll a unit from another.

As next there are the __units__. With these, you can win, but also lose the game. To understand units better, we can look at the JSON representation.

```
unit: {
  "id": 0,
  "owner": "satorialist",
  "type": "yuyuko",
  "position": {
    "x": 0,
    "y": 0
  },
  "vertices": [],
  "stats": {
    "health": 100
  },
  "actions": [ "walk", "being top tier" ]
}
```

At last, __actions__ are there to manipulate your units. To explain it simple, they are just methods, but methods, that can be called by the client, so through the network. Since the client should not be able to set the unit's stats or position as they please, but rather have to go through methods, that restrict the manipulation.

### Communication
###### (again, courtesy of [UgiNyaa](https://github.com/UgiNyaa))

The communication part is kept very simple. The server just sends unit and action data, when one of the player's units gets to see a unit of another player. Also the action information like paramTypes is just sent to the client.

Everything is packed in a JSON format, since JSON is easy to implement and both ends are running javascript.

A common communication message is built like this:

```
{
  "units": [ { ... } ],
  "actions": [ { ... } ]
}
```

Also mentionable is, that everything is running through websockets, because we have the intention to keep it all on the web.
