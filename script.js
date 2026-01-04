alert ("Welcome to my website")
function MULA(){
	alert ("Start filling the form");}
function hantar(){
	var nama=document.getElementById("nama").
	value;
	var email=document.getElementById("email").
	value;
	
	alert ("Terima Kasih"+ name + "We will contact you on "+ email );
	
	document.getElementById("result").innerHTML=
	"Terima Kasih"+ name + "We will contact you on "+ email ;
	
	document.getElementById("borang").style.display="none";
	}
	
function darkMode(){
	document.getElementById("page").style.backgroundColor="black";
	document.getElementById("page").style.color="gray"
	}
function LightMode(){
	document.getElementById("page").style.backgroundColor="pink";
	document.getElementById("page").style.color="purple"
	}
function increaseText(){
	document.getElementById("page").
	style.fontSize="26px";
	}
	
function decreaseText(){
	document.getElementById("page").
	style.fontSize="10px";
	}