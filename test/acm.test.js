'use strict';

const mock = require('egg-mock');

describe('test/acm.test.js', () => {
  let app;
  before(() => {
    app = mock.app({
      baseDir: 'apps/acm-test',
    });
    return app.ready();
  });

  after(() => app.close());
  afterEach(mock.restore);

  it('should GET /', () => {
    return app.httpRequest()
      .get('/')
      .expect('hi, acm')
      .expect(200);
  });
});
