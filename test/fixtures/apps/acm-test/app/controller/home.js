'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    const data = await this.ctx.acm.getConfig('test', 'DEFAULT_GROUP');
    this.ctx.body = 'hi, ' + data;
  }
}

module.exports = HomeController;
