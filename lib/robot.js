'use strict';

const Client = require('./client');
const Message = require('./message');
const debug = require('debug')('egg-dingtalk-robot:robot');

let robotsOpt;

function getRobot(options) {
  const client = new Client(options);
  return new Message(client, options);
}

function createDingtalkRobot(options) {
  return getRobot(options);
}

module.exports = createDingtalkRobot;
