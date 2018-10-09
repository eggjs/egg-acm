'use strict';

const Base = require('acm-client').ACMClient;

class ACMClient extends Base {
  constructor(app) {
    super(Object.assign({
      cluster: app.cluster,
    }, app.config.acm));

    this.app = app;
    this.on('error', err => {
      app.coreLogger.error(err);
    });

    app.beforeStart(async () => {
      await this.ready();
      app.coreLogger.info('[egg-acm] acm-client is ready');
    });
    app.beforeClose(async () => {
      await this.close();
      app.coreLogger.info('[egg-acm] acm-client is closed');
    });
  }
}

module.exports = ACMClient;
