var http = require('http');
var https = require('https');
var express = require('express');
var app = express();
var mysql = require('mysql');
var router = express.Router();

var arrayList=[];
function Databaseobj(ID, name ,length,plan,price,phonenumber, startdate,enddate,topsubscribe,iconurl, creditcards,Subscription_Name, Subscription_Url,deleteBool){
	
	this.ID = ID,
	this.name = name,
	this.length =length,
	this.plan=plan;
	this.price= price,
	this.phonenumber=phonenumber,
	this.startdate = startdate,
	this.enddate=enddate,
	this.topsubscribe=topsubscribe,
	this.iconurl = iconurl,
	this.creditcards=creditcards;
	this.Subscription_Name=Subscription_Name;
	this.Subscription_Url=Subscription_Url,
	this.deleteBool=deleteBool;
}


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
var queryString = 'Select * from UserSubscription where deleteBool=false';
connection.query(queryString, function(err, rows, fields) {
    if (err){
    	throw err;
    }
    else{
    	console.log("User Subscription Table fetch");
    }
 
    for (var i in rows) {
    	
    	var id = rows[i].ID;
    	var name = rows[i].FullName;
    	var length = rows[i].Length;
    	var plan = rows[i].Subscription_Plan;
    	var price = rows[i].Price;
       	var phonenumber = rows[i].PhoneNumber;
    	var startdate = rows[i].StartDate;
    	var enddate = rows[i].EndDate;
    	var topsubscribe = rows[i].Top_Subscription;
    	var iconurl = rows[i].IconUrl;
    	var creditcards= rows[i].CreditCards;
    	var subscription_name= rows[i].Subscription_Name;
    	var subscription_url= rows[i].Subscription_Url;
    	var deleteBool = rows[i].deleteBool;
    	

       var obj = new Databaseobj(id, name, length,plan,price,phonenumber,startdate,enddate, topsubscribe,iconurl,creditcards,subscription_name,subscription_url,deleteBool);
       arrayList.push(obj);   
    }
});

	app.use('/', router);
	router.get('/usersRead', function(req, res) {

		res.type('text/plain');
		res.send(JSON.stringify(arrayList,null,'\t')); 
		console.log(res.status);
		
	});

module.exports = router;
connection.end();
app.listen(3000);

