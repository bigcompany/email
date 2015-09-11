var providers = {};

providers.sendgrid = require('./providers/sendgrid').send;
providers.mock = require('./providers/mock').send;

module['exports'] = function (opts, cb){
  opts.provider = opts.provider || 'sendgrid';
  providers[opts.provider](opts, cb);
};