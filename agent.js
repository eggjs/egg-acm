'use strict';

const ACMClient = require('./lib/acm_client');

module.exports = agent => {
  agent.acm = new ACMClient(agent);
};
