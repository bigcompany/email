var colors = require('colors');

var mock = {};
mock.send = function (options, callback) {
  
  var data = options;
  
  data.bcc = data.bcc || "";
  // console.log('email', data)
  console.log("===============================================");
  console.log("EMAIL MOCK DETECTED OUTGOING EMAIL MESSAGE".yellow);
  console.log("to: ".grey + data.to.grey);
  console.log("from: ".grey + data.from.grey);
  console.log("bcc: ".grey + data.bcc.grey);
  console.log("subject: ".grey + data.subject.grey);
  console.log("===============================================");
  
  // trim body for console.log output
  var body = data.html || data.text;
  if (body.length > 255) {
    //body = body.substr(0, 255) + "...";
  }
  console.log(body);
  console.log("===============================================");
  console.log("END MESSAGE".yellow);
  console.log("===============================================");
  callback(null, data);
  
};

module['exports'] = mock;

