var email = require('../lib');

email.send({
  api_user: "username",
  api_key: "key",
  to: "test@marak.com",
  from: "test@big.vc",
  subject: "test email from email resource",
  text: "hello"
}, function (err, result) {
  console.log(err, result);
});