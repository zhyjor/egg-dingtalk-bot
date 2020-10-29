'use strict';

const createDingtalkRobot = require('../../lib/robot');

module.exports = {
  /**
   * dingtalk
   * @member Application#dingtalk
   */
  dingtalkRobot(opts) {
    const options = Object.assign({}, opts);
    options.urllib = this.httpclient;
    const robot = createDingtalkRobot(options);
    return robot;
  },
};
