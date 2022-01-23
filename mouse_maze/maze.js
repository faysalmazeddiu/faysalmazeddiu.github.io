$(document).ready(function(){
	
	var count=0;
    var win=0;
    var mouseClick=0;
	$("#start").click(function(){
		mouseClick=1;
		 if(count>0){
		 	count=0;
		 	win=0;
			$(".boundary").removeClass("youlose");
			$("#status").text("Click the S to begin.");
			$("#status").css("color","black")
			
			
		 }else{
		 	count=0;
		 	win=0;
		 	$("#status").text("Game Start..");
		 	$("#status").css("color","red")
		 	
		 }

			
	});

	$("#maze").mousemove(function(event){
		if(mouseClick==1){
			$(".example").text(event.pageX + ", " + event.pageY);
		}
   		
  	});


	$(".boundary").mouseover(function(){
		
		 if (mouseClick==1) {
		 	count=1;
		 	mouseClick=0;
			$(".boundary").addClass("youlose");
			$("#status").text("You lose!")
			$("#status").css("color","red")
		 }
			
	});



	$("#end").mouseenter(function(){
		if (count==0 && mouseClick==1) {
			++win;
			//mouseClick=0;
			$("#status").text("You win!")
			$("#status").css("color","red")
		}
	});

});