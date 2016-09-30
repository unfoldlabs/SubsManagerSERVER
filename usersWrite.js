
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
//app.use('/', router);
app.get('/usersWrite', function(req, res) {

var name = req.query.name;
var length = req.query.length;
var plan = req.query.plan;
var price = req.query.price;
var phonenumber = req.query.phonenumber;
var startdate = req.query.startdate;
var enddate = req.query.enddate;
var topsubscribe = req.query.topsubscribe;
var iconurl = req.query.iconurl;
var creditcards= req.query.creditcards;
var id = req.query.id;
var subscription_name= req.query.subscription_name;
var subscription_url= req.query.subscription_url;
var deleteBool = req.query.deleteBool;

	var queryString = 'Insert into UserSubscription(FullName, Length, Subscription_Plan, Price, PhoneNumber, StartDate, EndDate, Top_Subscription, IconUrl, CreditCards, ID, Subscription_Name, Subscription_Url, deleteBool) values("'+name+'","'+length+'","'+plan+'","'+price+'","'+phonenumber+'","'+startdate+'","'+enddate+'","'+topsubscribe+'","'+iconur+'","'+creditcards+'","'+id+'","'+subscription_name+'","'+subscription_url+'","'+deleteBool+'")';
connection.query(queryString, function(err, rows, fields) {
    if (err){
    	throw err;
    	//console.log("error");
    }
    else{
    	console.log("UsersSubscription Table : Data Inserted");
    }
    connection.end();
    });
res.send("Data in inserted into table");
});




module.exports = router;
//connection.end();
app.listen(1400);



