var resource = require('resource'),
    email;

email = resource.define('email', { 
  controller: require('./lib/'), 
  schema: require('./email.mschema')
}); 

module['exports'] = email;