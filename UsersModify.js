
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
// to delete a row with a given ID 
app.get('/UsersModify', function(req, res) {
var id = req.query.id;


	var queryString = 'Update UserSubscription set deleteBool=true where ID = '+id;
connection.query(queryString, function(err, rows, fields) {
    if (err){
    	throw err;
    	//console.log("error");
    }
    else{
    	console.log("UsersSubscription Table : Data Modified");
    }
    connection.end();
    });
res.send("UserSubscription Table is updated where ID = "+id);
});




module.exports = router;
//connection.end();
app.listen(1400);



