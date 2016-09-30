/*var express = require('express');
var router = express.Router();

//GET home page. 
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

*/


var http = require('http');
var https = require('https');
var express = require('express');
var app = express();
var mysql = require('mysql');
var router = express.Router();


var connection = mysql.createConnection({
	host:'localhost',
	user:'root',
	//password:'root',
	database:'db'
		
});


var arr=[];
var arrayList=[];
function Databaseobj(ID, name ,length,plan1,price1,plan2, price2,plan3,price3,company_url,image_url, PhoneNumber){
	
	this.ID = ID,
	this.name = name,
	this.length =length,
	this.plan1=plan1
	this.price1 = price1,
	this.plan2=plan2
	this.price2 = price2,
	this.plan3=plan3
	this.price3 = price3,
	this.company_url=company_url
	this.image_url=image_url
	this.PhoneNumber = PhoneNumber;
}

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

var queryString = 'Select * from TopSubscription';
connection.query(queryString, function(err, rows, fields) {
    if (err){
    	throw err;
    }
    else{
    	console.log("Top Subscription Table fetch");
    }
 
    for (var i in rows) {
    	
    	var id = rows[i].ID;
    	var name = rows[i].Subscription_Name;
    	var length = rows[i].Subscription_Length;
    	var plan1 = rows[i].Subscription_Plan1;
    	var price1 = rows[i].Price1;
    	var plan2 = rows[i].Subscription_Plan2;
    	var price2 = rows[i].Price2;
    	var plan3 = rows[i].Subscription_Plan3;
    	var price3 = rows[i].Price3;
    	var company_url = rows[i].Company_url;
    	var image_url = rows[i].Image_url;
    	var PhoneNumber = rows[i].PhoneNumber;
    	
       //console.log('ID: ', id);
       //console.log('Name: ', name);
       //console.log('Plan: ', plan1);
       //console.log('Price1: ', price1);
       var obj = new Databaseobj(id, name, length,plan1,price1,plan2,price2,plan3,price3,company_url,image_url, PhoneNumber);
       arrayList.push(obj);   
    }
    
   //console.log(JSON.stringify(arrayList));
});
// get request

	app.use('/', router);
	router.get('/index', function(req, res) {
	
	  res.type('text/plain');
	  res.send(JSON.stringify(arrayList,null,'\t')); 
	  console.log(res.status);

	
	});

	module.exports = router;		


app.listen(4000);
connection.end();




