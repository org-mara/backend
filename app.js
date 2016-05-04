'use strict';

var fs      = require('fs-extra');
var SwaggerExpress = require('swagger-express-mw');
var app = require('express')();
var SwaggerUi = require('swagger-tools/middleware/swagger-ui');
module.exports = app; // for testing

var configCon = JSON.parse(fs.readFileSync('/etc/nodejs-config/mara.json'));

var config = {
  appRoot: __dirname // required config
};

SwaggerExpress.create(config, function(err, swaggerExpress) {
  if (err) { throw err; }

  //add swagger-ui
  app.use(SwaggerUi(swaggerExpress.runner.swagger));

  // install middleware
  swaggerExpress.register(app);

  // var port = process.env.PORT || 10010;
  // app.listen(port);

  // if (swaggerExpress.runner.swagger.paths['/hello']) {
  //   console.log('try this:\ncurl http://127.0.0.1:' + port + '/hello?name=Scott');
  // }

  console.log(configCon);
  console.log("Dcoumentacion: http://localhost:8080/docs/#/");
  var port =  configCon.port;       //process.env.PORT
  app.listen(port);
});
