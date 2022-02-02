const express=require('express');
const urlencodedparser=express.urlencoded({extended:false});
const directoryRoute=express.Router();
const mysql=require('mysql');

var connection=mysql.createConnection({
	host:'localhost',
	user:'root',
	password:"12345678",
	database:'entries'
});

directoryRoute.get('/',(req,res,next)=>{
	connection.connect((err)=>{
		if (err) {
			console.log("Database not cnnected");
		}else{
			console.log("Database cnnected");
			res.redirect('/my');

		}
	})
});

directoryRoute.get('/api/search/get',urlencodedparser,(req,res)=>{
			console.log(req.query.word);
			connection.query(`SELECT * FROM entries WHERE word = '${req.query.word}'`,(err,data)=>{
				if (err) {
					console.log("something wrong......");
				}else{
					console.log(data);
					res.status(200).json(data);
				}
			});
		
			//`SELECT * FROM entries WHERE word = '${word}'`
	
});

/*
directoryRoute.post('/api/search',urlencodedparser,(req,res)=>{
			console.log(req.body.word);
			connection.query(`SELECT * FROM entries WHERE word = '${req.body.word}'`,(err,data)=>{
				if (err) {
					console.log("something wrong......");
				}else{
					console.log(data);
					res.status(200).json(data);
				}
			});
		
			//`SELECT * FROM entries WHERE word = '${word}'`
	
});
*/
module.exports=directoryRoute;
