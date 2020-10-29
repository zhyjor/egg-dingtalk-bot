'use strict';

const createDingtalkRobot = require('../../lib/robot');

module.exports = {
  /**
   * dingtalk
   * @member Application#dingtalk
   */
  dingtalkRobot(opts) {
    const options = Object.assign({}, this.config.dingtalkRobot, opts);
    options.urllib = this.httpclient;
    const robot = createDingtalkRobot(options);
    return robot;
  },
};
