/**
 *
 * DATA API for MySql Server
 *
 *
 * USET FROM CLIENT
 * 
 * POST:
 * $.ajax("http://magic-server:3000/data", {
 *  type: "GET",
 *  data : {key: "asas", value: "b*/*/*/"}
 * });
 *
 * GET:
 * $.ajax("http://magic-server:3000/data", {success: function(data) {
 *    console.log(data);  
 * }});
 *
 * @author Michal Toman
 */

var express = require('express');
var mysql   = require('mysql');


var app = express();
app.use(express.bodyParser());

var connection = mysql.createConnection({
  host      : 'localhost',
  user      : 'root',
  password  : '####',
  database  : 'test',
});


// ---------------------- REST API METHODS ------------------------------------


app.get('/data', function(req, res) {
	connection.query('SELECT * FROM data', function(err, rows, fields) {
	  if (err) throw err;

	  var json = JSON.stringify(rows);
	  res.send(json);
	});
});


app.post('/data', function (req, res){
	connection.query('INSERT INTO data SET ?', req.body, function(err, result) {
		if (err) throw err;
	});
});


app.listen(3000);
console.log('Listening notenizer on port 3000...');