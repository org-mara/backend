'use strict';

// var request = require('request');
var rp = require('request-promise');


module.exports = {
  getSchema : getSchema,
  postSchema: postSchema
}

// var url = 'http://cendraws-dev.unc.edu.ar';

// var get = getSchema();
// get.then(resuelto(), noresuelto());


function getSchema() {
  var options = {
    url: 'http://cendraws-dev.unc.edu.ar/api/v1/schema',
    method: 'GET',
    json: true,                         // Automatically parses the JSON string in the response
    resolveWithFullResponse: true       //Trae todas las propiedades aparate del doby en el response
   };

   return rp(options);


  // var options = {
  //   url: 'http://cendraws-dev.unc.edu.ar/api/v1/schema',
  //   method: 'GET'
  //  };
  //  request(options, function (error, response, body) {
  //    if (!error && response.statusCode == 200) {
  //      console.log(JSON.parse(body));
  //    }
  //    if (response.statusCode == 500) {
  //
  //    }
  //  })

}

function postSchema() {

  //Recibir datos post
  var options = {
    url: 'http://cendraws-dev.unc.edu.ar/api/v1/schema',
    method: 'POST',
    json: true,                         // Automatically parses the JSON string in the response
    resolveWithFullResponse: true       //Trae todas las propiedades aparate del doby en el response
   };

}



// POSTMAN
// POST http://cendraws-dev.unc.edu.ar/api/v1/schema

// {
//     "objName": "Nota",
//     "type": "object",
//     "objSecurity": {
//       "acl": {
//         "group:public": {
//           "write": false,
//           "properties": {
//             "properties:all": false
//           }
//         }
//       }
//     },
//     "properties": {        // Metadatos
//       "title": {"type": "string", "required": true},
//       "date": {"type": "string", "required": true},
//       "subject": {"type": "string", "required": true}
//     }
//   }
