var flag=0;
var hist="<br>";
function clr(v) {
	document.getElementById("display").value=v;
	flag=0;
}
function displayhistory()
{
	document.getElementById("hist-display").innerHTML=hist;
}
function val(v) {
	if(v=="*" || v=="/" || v=="-" || v=="+"){
		flag=0;
	}
	if(flag==0) {
		document.getElementById("display").value+=v;
	}
	else {
		flag=0;
		clr("");
		val(v);
	}
}

function evl() { 
	var exp=document.getElementById("display").value;
	try { 
		var result=eval(exp);
		clr(result);
		hist=hist+exp+" = "+result+"<br><br>";
		flag=1;
	} 
	catch(e) {
		clr('Error');
		flag=1;
	} 
} 

function enterKey(e) {
	if(e.key=="/" || e.key=="*" || e.key=="-" || e.key=="+"){
		flag=0;
	}
	if(flag==1) {
		clr("");
	}
	if(e.keyCode==13)
	{
		evl();
	}
}