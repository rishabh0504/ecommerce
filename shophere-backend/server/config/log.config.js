const log4js = require('log4js');
log4js.configure({
  appenders: { app: { type: 'file', filename: 'app.log' } },
  categories: { default: { appenders: ['app'], level: 'error' } }
});

module.exports = log4js;