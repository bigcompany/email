var sendgrid = {};

sendgrid.send = function (options, callback) {
  var _sendgrid  = require('sendgrid')(options.api_user, options.api_key);
  _sendgrid.send(options, function (err, json) {
    if (err) { 
      return callback(err, options);
    }
    callback(null, json)
  });
};

module['exports'] = sendgrid;