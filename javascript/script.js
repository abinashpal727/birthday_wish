function authenticate(){
	var uname = document.querySelector("#username").value;
	var pass = document.querySelector("#password").value;
	if(uname== "ANWESHA SAHA"&& pass=="I LOVE YOU")
  	{
  	    window.location.href="start.html";
  	}
  	else
  	{
  		alert("invalid details");
  		window.location.href="index.html";
  	}	
};
