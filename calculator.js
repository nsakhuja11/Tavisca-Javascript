var flag=0;

function clr(v) {
	document.getElementById("display").value=v;
	flag=0;
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
	try 
	{ 
	  clr(eval(document.getElementById("display").value))
	  flag=1;
	} 
	catch(e) 
	{
	  clr('Error')
	} 
} 

function enterKey(e) {
	if(e.keyCode==13)
	{
		evl();
	}
}