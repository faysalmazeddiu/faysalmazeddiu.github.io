const express=require('express');
const bodyParser = require('body-parser');
const app=express();
var path=require("path");
app.use(express.static(path.join(__dirname,"public")))
//const urlencoded=app.express.urlencoded({extended:false});
const urlencoded=express.urlencoded({ extended: false })

app.get('/',(req,res)=>{
	res.status(200).sendFile(path.join(__dirname,"public","calculator.html"));
});


app.post('/operation',urlencoded,(req,res)=>{
	var result=0;
	if (req.body.operation==='add') {
		 result=Number(req.body.first_number)+Number(req.body.second_number);
	}else if (req.body.operation==='subtract') {
		 result=Number(req.body.first_number)-Number(req.body.second_number);
	}else if (req.body.operation==='division') {
		// sum=Number(req.body.first_number)+Number(req.body.second_number);
		if (Number(req.body.first_number)>Number(req.body.second_number)) {
			result=Number(req.body.first_number)/Number(req.body.second_number);
		}else{
			result="First Number should be greater than second Number"
		}
	}else if (req.body.operation==='multiply') {
		result=Number(req.body.first_number)*Number(req.body.second_number);
	}

	res.send("The Answer is: "+result+"&nbsp;&nbsp; <a href='/'>Back</a>");
})


app.listen(5000,()=>{
	console.log("Server is started on port:"+5000);
});