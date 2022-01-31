const express=require('express');
const app=express();
const urlencodedparser=express.urlencoded({extended:false});
const viewPath=express.static("./public");
app.use(viewPath);

app.set('view engine','pug');

var quizQuestions=[

	{queNo:1,pattern:"3,1,4,1,5,", answer:"9"},
	{queNo:2,pattern:"1,1,2,3,5,", answer:"8"},
	{queNo:3,pattern:"1,4,9,16,25,", answer:"36"},
	{queNo:4,pattern:"2,3,5,7,11,", answer:"13"},
	{queNo:5,pattern:"1,2,4,8,16", answer:"32"}


];

app.get('/',(req,res)=>{
	res.render('index.pug',{quizQuestions:quizQuestions[0],score:0,qusIndex:0});
});

app.post('/',urlencodedparser,(req,res)=>{
	//console.log(req.body);
	var score=Number(req.body.score);
	var qusIndex=Number(req.body.qusIndex)+1;
	if(req.body.answer===quizQuestions[Number(req.body.qusIndex)].answer){
		++score;
		
	}
	if(Number(req.body.quesSerial)===quizQuestions.length){
		res.render('result.pug',{score:score,quesSerial:req.body.quesSerial});
	}else{
		res.render('index.pug',{quizQuestions:quizQuestions[qusIndex],score:score,qusIndex:qusIndex});
	}
	
});



app.listen(5000,()=>{
	console.log('server stated...:',5000);
});