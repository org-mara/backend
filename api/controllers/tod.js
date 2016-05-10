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

cendra.getSchema()
  .then(function (response) {
    console.log(response);
    var res = {};

    res.type = "Document";      // Define si es un tipo documental Document o Folder.
    res.label = "";             // Nombre completo del tipo de objeto documental.
    res.identifier = "";        // Identificador alfabetico del tipo de objeto documental utilizado para conformar el CUDAP.
    res.icon = "";              // Icono del tipo de objeto documental. Tamaño 16 px.
    res.large-icon = "";        // Icono del tipo de objeto documental. Tamaño 64 px.
    res.description = "";       // Descripcion del tipo de objeto documental.
    res.file-format = "";       // Listado de formato permitido de archivos adjuntos.
    res.schemas = "";           // Listado de metadatos del tipo de objeto documental.
    res.container-type = "";    // Listado de tipos de objetos documentales que puede contener si es un Folder.


    res.status(200).json(response.body);
  })
  .catch(function (error) {
    var e = {}
    e.code = 500;
    e.message = error.message;
    e.fields = "schema";
    console.log(e);
    res.status(500).json(e);
  });

  // cendra.getSchema();





}

function todIdGet(req, res, next) {
  // body...
}

function todIdDelete(req, res, next) {
  // body...
}
