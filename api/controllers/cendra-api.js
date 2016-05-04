'use strict';

var request = require('request');


module.exports = {
  prueba : pruebaCendra
}


function pruebaCendra() {
  var options = {
    url: 'http://cendraws-dev.unc.edu.ar/api/v1/schema',
    method: 'GET'
   };
   request(options, function (error, response, body) {
     console.error(error);
     console.log(response);
   })
}
