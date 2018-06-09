var connect = require('connect');
var serveStatic = require('serve-static');
connect().use(serveStatic(__dirname)).listen(12121, function(){
    console.log('Server running on 12121...');
});