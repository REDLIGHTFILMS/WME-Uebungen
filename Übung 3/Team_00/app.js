// DO NOT CHANGE!
//init app with express, util, body-parser, csv2json
var express = require('express');
var router = express.Router();
var app = express();
var sys = require('util');
var path = require('path');
var bodyParser = require('body-parser');
var Converter = require("csvtojson");
var csvFilePath = require("./world_data.csv");

//register body-parser to handle json from res / req
app.use( bodyParser.json());

//register public dir to serve static files (html, css, js)
app.use( express.static( path.join(__dirname, "public") ) );

// END DO NOT CHANGE!
/**************************************************************************
****************************** csv2json *********************************
**************************************************************************/

var json;

Converter().fromFile("./world_data.csv").then(source =>{
   source = json;
})

router.get("/items")


/**************************************************************************
********************** handle HTTP METHODS ***********************
**************************************************************************/



// DO NOT CHANGE!
// bind server to port
var server = app.listen(3000, function () {
    var host = server.address().address;
    var port = server.address().port;
    console.log('Example app listening at http://%s:%s', host, port);
});