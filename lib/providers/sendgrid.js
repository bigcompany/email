var sendgrid = {};
sendgrid.send = function (options, callback) {
  var _sendgrid  = require('sendgrid')(options.api_user, options.api_key);
  _sendgrid.send(options, function (err, json) {
    if (err) { 
      return callback(err, options);
    }
    // better handling of errors from sendgrid by parsing returned json
    // and continuing with an object containing the original email plus the new returned information
    callback(null, options);
  });
};

module['exports'] = sendgrid;