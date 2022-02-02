const express=require('express');
const app=express();
const urlecodedparser=express.urlencoded({extended:false});
const path=require('path');
const directoryRoute=require('./route/word');
const viewPath=express.static("./public");
app.use(viewPath);

app.use('/',directoryRoute);

app.get('/my',(req,res,next)=>{

	res.sendFile(path.join(__dirname,'views','dict.html'));
	
});



app.listen(5000,()=>{
	console.log("server connected.....");
});