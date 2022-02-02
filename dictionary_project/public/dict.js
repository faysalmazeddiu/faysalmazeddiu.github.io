
$(document).ready(function(){

    $("#btnSearch").click(function(){

         $("#meaning").html("");
        $("#err").html("");
        $("#err1").text("");
        var value=$("#search").val();
        if (value.length===0) {
            
            $("#err").html("* Term field is required");
            return false;
        }else{

            var url ="http://localhost:5000/api/search/get";
            
            $.get(url,{word:value}).done(suceesFunction).fail(errorFunction);

            function suceesFunction(result){

                if (result.length==0) {
                        $("#err1").text("Word not found").css("color","red");
                    }else{
                        var count=0;
                        $.each(result,function(index,value){
                            ++count;
                            $("#meaning").append("<p>"+count+" ("+value.wordtype+") :: "+value.definition+"</p>");
                        });
                    }
            }

            function errorFunction(error){
                     alert(error);
                    $.each(error,function(index,value){
                            alert(value);
                            
                        });
            }

        }

    });

});


            /*
            var url ="http://localhost:5000/api/search";

            $.post(url,{
                word:value
            }).done(function(result){
                 alert(result);
                    if (result.length==0) {
                        $("#err1").text("Word not found").css("color","red");
                    }else{
                        var count=0;
                        $.each(result,function(index,value){
                            ++count;
                            $("#meaning").append("<p>"+count+" ("+value.wordtype+") :: "+value.definition+"</p>");
                        });
                    }
            }).fail(function(err){
                    alert(err);
                    $.each(error,function(index,value){
                            alert(value);
                            
                        });
            });
        */



            /*
            var url ="http://localhost:5000/api/search/get";
            $.ajax(url,{
                type:"GET",
                dataType:'json',
                data:{
                     word:value
                 },
                 success:function(result){
                    alert(result);
                    if (result.length==0) {
                        $("#err1").text("Word not found").css("color","red");
                    }else{
                        var count=0;
                        $.each(result,function(index,value){
                            ++count;
                            $("#meaning").append("<p>"+count+" ("+value.wordtype+") :: "+value.definition+"</p>");
                        });
                    }
                 },
                 error:function(error){
                    $.each(error,function(index,value){
                            alert(value);
                            
                        });
                 }

            });
            */







/*

$(document).ready(function(){

    $("#btnSearch").click(function(){

         $("#meaning").html("");
        $("#err").html("");
        $("#err1").text("");
        var value=$("#search").val();
        if (value.length===0) {
            
            $("#err").html("* Term field is required");
            return false;
        }else{

            var url ="http://localhost:5000/api/search";
            alert(url);
            $.ajax(url,{
                type:"POST",
                dataType:'json',
                data:{
                     word:value
                 },
                 success:function(result){
                    alert(result);
                    if (result.length==0) {
                        $("#err1").text("Word not found").css("color","red");
                    }else{
                        var count=0;
                        $.each(result,function(index,value){
                            ++count;
                            $("#meaning").append("<p>"+count+" ("+value.wordtype+") :: "+value.definition+"</p>");
                        });
                    }
                 }

            });
        }

    });

});


*/










// here is final
/*$(document).ready(function(){
    
    $("#btnSearch").click(function(){
        $("#meaning").html("");
        $("#err").html("");
        $("#err1").text("");
        var value=$("#search").val();
        
        if (value.length===0) {
            
            $("#err").html("* Term field is required");
            return false;
        }else{
            var routeUrl="http://localhost:5000/api/search";
            $.ajax({
                url:routeUrl,
                type:'POST',
                data:{
                    word:value
                },
                dataType:'json',
                success:function(result){

                    if (result.length==0 || result=='' || result==undefined) {
                       //alert("so data found");
                        $("#err1").text("Word not found").css("color","red");

                    }else{

                        var count=0;
                       $.each(result,function(key,value){
                        ++count;
                            $("#meaning").append("<p>"+count+" ("+value.wordtype+") :: "+value.definition+"</p>");
                       });

                    }
                 
                   

                },
                error:function(err){
                    alert(err);
                }

            });
        }
    });
});*/