// DO NOT CHANGE!
//init app with express, util, body-parser, csv2json
var express = require('express');
var app = express();
var sys = require('util');
var path = require('path');
var bodyParser = require('body-parser');
var Converter = require("csvtojson").Converter;

//register body-parser to handle json from res / req
app.use( bodyParser.json() );

//register public dir to serve static files (html, css, js)
app.use( express.static( path.join(__dirname, "public") ) );

// END DO NOT CHANGE!


/**************************************************************************
****************************** csv2json *********************************
**************************************************************************/

//1. Parsen der CSV und speichern als JSON
var items = {};

var Converter = require("csvtojson").Converter;
var converter = new Converter({});
converter.fromFile("./world_data.csv", function(err, jsonArray){
	items = jsonArray;
});



/**************************************************************************
********************** handle HTTP METHODS ***********************
**************************************************************************/
//2. Erstellen der REST-API
// GET-CALLS#
//items
app.get('/items', function(req, res, next){
	res.send({ items: items});
});

// items id
app.get('/items/:id', function(req, res, next){
	var id = req.params.id;
	var country = items[id];
	var found = false;
	
	if(typeof items.id !== undefined){
 		items.forEach(function(item, i) {
			if (!found && item.id === Number(id)) {
				res.send(items[i]);
				found = true;
			} 
		});
	} 
	
	if(!found) {
		res.json({error : "No such id " + id + " in database"});
	}
});

// items id1 id2
app.get('/items/:id1/:id2', function(req, res, next){

	var id1 = req.params.id1;
	var id2 = req.params.id2;
	var countrys = [];
	var found = false;
	

	for (var i = id1-1, j = id2-1; i <= j; i++) {
		countrys.push(items[i]);
		found = true;
	}

	res.send(countrys);
});
// properties
app.get('/properties', function(req, res, next){
	var properties = Object.getOwnPropertyNames(items[1]);
	res.send(properties);
});

// properties num
app.get('/properties/:num', function(req, res, next){
	var num = req.params.num;
	var properties = Object.getOwnPropertyNames(items[1]);
	var property = properties[num];
	res.send(property);
});

// POST-CALLS

app.post('/items', function(req, res, next) {
	var country_name = req.body.name;
	var property1 = req.body['birth_rate_per_1000'];
	var property2 = req.body['cell_phones_per_100'];

	var currentID = Object.keys(items).length+1;

	items.push({
		id: currentID,
		name: country_name,
		['birth_rate_per_1000']: property1,
		['cell_phones_per_100']: property2
	});
	res.send('Added country ' + country_name + '  to list');
});

// DELETE-CALLS
//items delete
app.delete('/items', function(req, res, next) {
	var currentID = Object.keys(items).length-1;
	var deleted_name = JSON.stringify(items[currentID].name);
	
	items.splice(currentID, 1);

    res.send('Deleted last country: ' + deleted_name);
});
//items id delete
app.delete('/items/:id', function(req, res){
	var id = req.params.id;
	var found = false;
	
	if(typeof items.id == "undefined"){
		items.forEach(function(item, i) {
			if (!found && item.id === Number(id)) {
				items.splice(i, 1);
				found = true;
			}
		});
	}

	if(found) {
		res.send({success : 'Item ' + id + ' deleted successfully.', status : 200});
	} else {
		res.json({error : "No such id " + id + " in database"});
	}
	
});


// DO NOT CHANGE!
// bind server to port
var server = app.listen(3000, function () {
    var host = server.address().address;
    var port = server.address().port;
    console.log('Example app listening at http://%s:%s', host, port);
});