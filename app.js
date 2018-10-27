'use strict';

const ACMClient = require('./lib/acm_client');

module.exports = app => {
  app.acm = new ACMClient(app);
};
