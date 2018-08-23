var names = ["Ragul", "Rajpreet", "Pallvi", "Neha", "Ankita", "Raja", "Shreea", "Smriti", "Shrijeet", "Ayush", "Swapnil", "Nihit", "Bhargavi", "Anushka", "Swinal", "Utkarsh", "Saurabh", "Paarth", "Vishwas", "Mohit", "Gurbaksh", "Ashwarya"];
var current;
var max;

function hide() {
	document.getElementById("options").innerHTML = "";
}

function remove() {
	document.getElementById("box").value = "";
	hide();
}

function display(data) {
	document.getElementById("box").value = data;
	hide();
}

document.getElementById("box").addEventListener("keyup",function(e){
	if(e.keyCode == 40) {
		if(current == -1) {
			current = 0;
			document.getElementById(current).className="select";
		}
		else if(current > -1 && current < max-1) {
			document.getElementById(current).className="unselect";
			current = current + 1;
			document.getElementById(current).className="select";
			if(current > 4) {
				document.getElementById("options").scrollBy(0,28);
			}
		}
	}
	else if(e.keyCode == 38) {
		if(current >0 && current < max) {
			document.getElementById(current).className="unselect";
			current = current - 1;
			document.getElementById(current).className="select";
			if(current < max-5){
				document.getElementById("options").scrollBy(0,-28);
			}
		}
	}
	else if(e.keyCode == 13) {
		var data = document.getElementById(current).innerHTML;
		display(data);
		hide();
	}
});

function showSuggestions() {
	debugger;
	var x=event.keyCode;
	if(x != 40 && x != 38 && x != 13) {
		names = names.sort();
		var input = document.getElementById("box").value;
		var options = document.getElementById("options");
		if(input == "") {
			options.innerHTML = "";
		}
		else {
			current=-1;
			var i;
			var count=0;
			options.innerHTML="";
			for(i=0;i<names.length;i++) {
				if(names[i].toUpperCase().includes(input.toUpperCase())) {
					options.innerHTML = options.innerHTML + "<li id="+count+" onclick='display(this.innerHTML)'>" + names[i] + "</li>";
					count = count + 1;
				}
			}
			max=count;
			if(count == 0) {
				options.innerHTML = "<li>No Match Found</li>";
			}
		}
	}
}