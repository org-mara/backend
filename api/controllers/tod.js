'use strict';

var cendra  = require('./cendra-api');


module.exports = {
  todGet : todGet,
  todIdGet: todIdGet,
  todIdDelete: todIdDelete
};


function todGet(req, res, next) {
  console.log(cendra.prueba());

}

function todIdGet(req, res, next) {
  // body...
}

function todIdDelete(req, res, next) {
  // body...
}
