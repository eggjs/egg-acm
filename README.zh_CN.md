# egg-acm-client

[![NPM version][npm-image]][npm-url]
[![build status][travis-image]][travis-url]
[![Test coverage][codecov-image]][codecov-url]
[![David deps][david-image]][david-url]
[![Known Vulnerabilities][snyk-image]][snyk-url]
[![npm download][download-image]][download-url]

[npm-image]: https://img.shields.io/npm/v/egg-acm-client.svg?style=flat-square
[npm-url]: https://npmjs.org/package/egg-acm-client
[travis-image]: https://img.shields.io/travis/eggjs/egg-acm-client.svg?style=flat-square
[travis-url]: https://travis-ci.org/eggjs/egg-acm-client
[codecov-image]: https://img.shields.io/codecov/c/github/eggjs/egg-acm-client.svg?style=flat-square
[codecov-url]: https://codecov.io/github/eggjs/egg-acm-client?branch=master
[david-image]: https://img.shields.io/david/eggjs/egg-acm-client.svg?style=flat-square
[david-url]: https://david-dm.org/eggjs/egg-acm-client
[snyk-image]: https://snyk.io/test/npm/egg-acm-client/badge.svg?style=flat-square
[snyk-url]: https://snyk.io/test/npm/egg-acm-client
[download-image]: https://img.shields.io/npm/dm/egg-acm-client.svg?style=flat-square
[download-url]: https://npmjs.org/package/egg-acm-client

应用配置管理 ACM（Application Configuration Management）前身为淘宝内部配置中心 Diamond，是一款在分布式架构环境中对应用配置进行集中管理和推送的应用配置中心产品。利用 ACM，您可以在微服务、DevOps、大数据等场景下极大减轻配置管理的工作量，并增强配置管理的服务能力。

## 依赖说明

### 依赖的 egg 版本

egg-acm-client 版本 | egg 1.x
--- | ---
1.x | 😁
0.x | ❌

### 依赖的插件
<!--

如果有依赖其它插件，请在这里特别说明。如

- security
- multipart

-->

## 开启插件

```js
// config/plugin.js
exports.acm = {
  enable: true,
  package: 'egg-acm-client',
};
```

## 使用场景

在应用生命周期管理中，开发人员通常会将应用中需要变更的一些配置项或者元数据从代码中分离出来，放在单独的配置文件中管理，这些单独管理的内容就称为应用配置。这种分离应用配置的方法是管理应用变更的常见手段之一。发布应用后，运维人员或最终用户可以通过调整配置来适配环境，或调整应用程序的运行行为。

## 详细配置

```js
exports.acm = {
  endpoint: 'acm.aliyun.com', // acm 控制台查看
  namespace: '**********',    // acm 控制台查看
  accessKey: '**********',    // acm 控制台查看
  secretKey: '**********',    // acm 控制台查看
  requestTimeout: 6000,       // 请求超时时间，默认6s
};
```

请到 [config/config.default.js](config/config.default.js) 查看详细配置项说明。

## 使用方法

可以通过 `app.acm` 或 `ctx.acm` 来访问 [acm-client](https://github.com/acm-group/acm-sdk-nodejs#api) 的 API
```js
// 主动拉取配置
const content= await app.acm.getConfig('test', 'DEFAULT_GROUP');
console.log('getConfig = ',content);

// 监听数据更新
app.acm.subscribe({
  dataId: 'test',
  group: 'DEFAULT_GROUP',
}, content => {
  console.log(content);
});

// 发布配置接口
const content= await app.acm.publishSingle('test', 'DEFAULT_GROUP', '测试');
console.log('getConfig = ',content);

// 删除配置
await acm.remove('test', 'DEFAULT_GROUP');
```

## 提问交流

请到 [egg issues](https://github.com/eggjs/egg/issues) 异步交流。

## License

[MIT](LICENSE)
