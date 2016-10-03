var http = require('http');
var https = require('https');
var express = require('express');
var app = express();
var mysql = require('mysql');
var router = express.Router();
var url = require('url');

var connection = mysql.createConnection({
	host:'localhost',
	user:'root',
	//password:'root',
	database:'db'	
});

connection.connect(function(err){
	if(err){
		console.error(err);
		console.log('error');
	}
	else{
		console.log('connected');
	}
});
	var queryString_Initial = 'Use db;';
	connection.query(queryString_Initial, function(err, rows, fields){
		if(err){
			console.error(err);
			throw err;
		}
		else{
			console.log("Database used");
		}
	});
	app.get('/insert', function(req, res) {
	var emailid = req.query.email;
	var password = req.query.Password;
	var queryString = 'Insert into Users(EmailID,Password) values("'+emailid+'","'+password+'")';
	connection.query(queryString, function(err, rows, fields) {
	    if (err){
		throw err;
		//console.log("error");
	    }
	    else{
		console.log("Users Table : Data Inserted");
	    }
    		connection.end();
    	});
	res.send("sent: "+emailid+" "+password);
	});
	module.exports = router;
	app.listen(1400);



