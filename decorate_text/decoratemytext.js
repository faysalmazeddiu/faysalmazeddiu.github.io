var count=0;
var timmer=null;
function callIntervalFunction1(){
    if(timmer==null){
        timmer=setInterval(makeBiggerText,2000,24);
    }
}

function changeTextStyle(){
    var checkbox=document.getElementById("bling");
    var textarea=document.getElementById("textarea"); 
    if(textarea.value !==null || textarea.value !==""){
        //alert(textarea.value);
        if(checkbox.checked){
            
            textarea.style.fontWeight="bold";
            textarea.style.color="green";
            textarea.style.textDecoration="underline";
            document.body.style.background = "#f3f3f3 url('https://courses.cs.washington.edu/courses/cse190m/12su/labs/6/hundred-dollar-bill.jpg')  no-repeat right top";
        }else{
            textarea.style.fontWeight="normal";
            textarea.style.color="black";
            textarea.style.textDecoration="none";
            document.body.style.background = "none";
        }
    }
    
}


function replaceWithMalkovitch(){
    var textarea=document.getElementById("textarea");
    if(textarea.value.length >= 5){
        textarea.value="Malkovich";
    }
}

function makeBiggerText(font){
    var textarea=document.getElementById("textarea"); 
    if(count==0){
       // textarea.style.fontSize=font+"pt";
       let size1=parseInt(window.getComputedStyle(textarea).fontSize)+2;
       textarea.style.fontSize=size1+"pt";
    }else{
        let size=parseInt(textarea.style.fontSize)+2;
        textarea.style.fontSize=size+"pt";
    }

    // if(count>4){
    //     count=0;
    //     clearInterval(timmer);
    // }
    ++count;
    
    
}