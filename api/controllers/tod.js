'use strict';

var cendra  = require('./cendra-api');


module.exports = {
  todGet : todGet,
  todIdGet: todIdGet,
  todIdDelete: todIdDelete
};


function todGet(req, res, next) {
  // var page = parseInt(req.query.page);
  // var limit = parseInt(req.query.limit);

  cendra.getSchema();

}

function todIdGet(req, res, next) {
  // body...
}

function todIdDelete(req, res, next) {
  // body...
}
