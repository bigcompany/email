var resource = require('resource'),
    email;

email = resource.define('email', { 
  controller: require('./lib/'), 
  schema: require('mschema-email')
}); 

module['exports'] = email;