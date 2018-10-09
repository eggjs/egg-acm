'use strict';

/**
 * egg-acm default config
 * @member Config#acm
 * @property {String} endpoint - acm server endpoint
 * @property {String} endpoint - acm namespace
 * @property {String} accessKey - accessKey
 * @property {String} secretKey - secretKey
 * @property {Number} requestTimeout - request timeout in ms, default is 6s
 * @property {Boolean} ssl - ssl or not
 */
exports.acm = {
  endpoint: 'acm.aliyun.com', // acm 控制台查看
  namespace: '', // acm 控制台查看
  accessKey: '', // acm 控制台查看
  secretKey: '', // acm 控制台查看
  requestTimeout: 6000, // 请求超时时间，默认6s
  ssl: false, // ssl 暂时不支持
};
