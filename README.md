# egg-dingtalk-robot

[![NPM version][npm-image]][npm-url]
[![David deps][david-image]][david-url]
[![NPM download][download-image]][download-url]

[npm-image]: https://img.shields.io/npm/v/egg-dingtalk-robot.svg?style=flat-square
[npm-url]: https://npmjs.org/package/egg-dingtalk-robot
[david-image]: https://img.shields.io/david/okoala/egg-dingtalk-robot.svg?style=flat-square
[david-url]: https://david-dm.org/okoala/egg-dingtalk-robot
[download-image]: https://img.shields.io/npm/dm/egg-dingtalk-robot.svg?style=flat-square
[download-url]: https://npmjs.org/package/egg-dingtalk-robot


## Install
```bash
npm install egg-dingtalk-bot --save
```

## Getting Started
```javascript
// {app_root}/config/plugin.js
exports.dingtalkRobot = {
  enable: true,
  package: 'egg-dingtalk-bot',
};

// {app_root}/config/config.default.js

// {app_root}/app/router.js
app.get('/sendText', function* () {
  this.body = yield this.app.dingtalkRobot.sendText('测试测试！');
});
```

## API
```javascript
app.dingtalkRobot.sendText(text, opts) - send text
app.dingtalkRobot.sendTextAt(text, atMobiles, opts) - send text at mobiles
app.dingtalkRobot.sendTextAtAll(text, opts) - send text at all
app.dingtalkRobot.sendLink(link, opts) - send link
app.dingtalkRobot.sendMarkdown(markdown, opts) - send markdown
app.dingtalkRobot.send(opts) - send raw
```

## More Information
[自定义机器人](https://open-doc.dingtalk.com/docs/doc.htm?spm=a219a.7386797.0.0.dY1Qqw&treeId=257&articleId=105735&docType=1)


## How to Contribute

Please let us know what we can help, check [issues](https://github.com/okoala/egg-dingtalk-robot/issues) for bug reporting and suggestion.



