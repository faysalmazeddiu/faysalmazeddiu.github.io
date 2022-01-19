
var createNewaccount=(function(){
	let content="";
	function show(account_name,deposit_money){
		content+="Acoount Name : "+account_name+" Deposit :"+deposit_money;
		content+="\n";
		document.getElementById("accountList").value=content;

	}
	let getValueAndDisplay=function(){
		    let account_name=document.getElementById("accountName").value;
			let deposit_money=document.getElementById("depositMoney").value;
			show(account_name,deposit_money);
	}

	return {
		createAccount:getValueAndDisplay
	};

})();


var rubyTimer=(function(){
		let timer = null;
	    let displayMessage =function (){
	    	document.getElementById("result").innerHTML+="Ruby! ";
	    }

		let delayMsg2=function () {
	        if (timer == null) {
	            timer = setInterval(displayMessage, 1000);
	        } else {
	            clearInterval(timer);
	            timer = null;
	        }
        }

	return{

		 timerStart:delayMsg2
	}

})();




