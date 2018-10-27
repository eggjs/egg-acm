# egg-acmclient

[![NPM version][npm-image]][npm-url]
[![build status][travis-image]][travis-url]
[![Test coverage][codecov-image]][codecov-url]
[![David deps][david-image]][david-url]
[![Known Vulnerabilities][snyk-image]][snyk-url]
[![npm download][download-image]][download-url]

[npm-image]: https://img.shields.io/npm/v/egg-acmclient.svg?style=flat-square
[npm-url]: https://npmjs.org/package/egg-acm-client
[travis-image]: https://img.shields.io/travis/eggjs/egg-acmclient.svg?style=flat-square
[travis-url]: https://travis-ci.org/eggjs/egg-acmclient
[codecov-image]: https://img.shields.io/codecov/c/github/eggjs/egg-acmclient.svg?style=flat-square
[codecov-url]: https://codecov.io/github/eggjs/egg-acmclient?branch=master
[david-image]: https://img.shields.io/david/eggjs/egg-acmclient.svg?style=flat-square
[david-url]: https://david-dm.org/eggjs/egg-acmclient
[snyk-image]: https://snyk.io/test/npm/egg-acmclient/badge.svg?style=flat-square
[snyk-url]: https://snyk.io/test/npm/egg-acmclient
[download-image]: https://img.shields.io/npm/dm/egg-acmclient.svg?style=flat-square
[download-url]: https://npmjs.org/package/egg-acmclient

Application Configuration Management (ACM), formerly known as Taobao's internal configuration center Diamond, is an application configuration center that enables you to centralize the management of application configurations, and accomplish real-time configuration push in a distributed environment. With ACM, you can greatly reduce the workload of configuration management and enhance service capabilities in scenarios such as microservices, DevOps, and big data.

## Install

```bash
$ npm i egg-acmclient --save
```

## Usage

```js
// {app_root}/config/plugin.js
exports.acm = {
  enable: true,
  package: 'egg-acmclient',
};
```

## Configuration

```js
// {app_root}/config/config.default.js
exports.acm = {
  endpoint: 'acm.aliyun.com', // Available in the ACM console
  namespace: '**********',    // Available in the ACM console
  accessKey: '**********',    // Available in the ACM console
  secretKey: '**********',    // Available in the ACM console
  requestTimeout: 6000,       // Request timeout, 6s by default
};
```

see [config/config.default.js](config/config.default.js) for more detail.

## Example

you can access [acm-client](https://github.com/acm-group/acm-sdk-nodejs#api) api via `app.acm` or `ctx.acm`
```js
// get config
const content= await app.acm.getConfig('test', 'DEFAULT_GROUP');
console.log('getConfig = ',content);

// subscription
app.acm.subscribe({
  dataId: 'test',
  group: 'DEFAULT_GROUP',
}, content => {
  console.log(content);
});

// publish config
const content= await app.acm.publishSingle('test', 'DEFAULT_GROUP', '测试');
console.log('getConfig = ',content);

// delete config
await acm.remove('test', 'DEFAULT_GROUP');
```

## Questions & Suggestions

Please open an issue [here](https://github.com/eggjs/egg/issues).

## License

[MIT](LICENSE)
