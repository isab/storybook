var tarr = new Array();
var parr = new Array();
var larr = new Array();

function newPassage(){
	var title = prompt("Title Please");
	var plot = prompt("Plot Please");
	var linkTo = prompt("Link To Which Other Passages");

	tarr.push(title);
	parr.push(plot);
	larr.push(linkTo);

}

function existingTitles(){
	tarr.sort();
	for(var i = 0; i < tarr.length; i++){
		document.writeln(i + " " + tarr[i]);
	}
}

function display(){
	for(var i = 0; i < tarr.length; i++){
		document.writeln("Title : " + tarr[i]);
		document.writeln("Plot : " + parr[i]);
		document.writeln("Links : " + larr[i]);
	}
}

function edit(){
	var index = prompt("Which number would you like to edit?");
	var option = prompt("Are you editing the Title, Prompt, or Links?");

	if(option === "title" || option === "Title"){
		var newT = prompt("New Title Please");
		tarr[index] = newT;
	}
	else if(option === "plot" || option === "Plot"){
		var newP = prompt("New Plot Please");
		parr[index] = newP;
	}
	else if(option === "links" || option === "Links"){
		var newL = prompt("New Links Please");
		larr[index] = newL;
	}
	else{
		window.alert("NOT CORRECT INPUT");
	}
}

function play(){
	document.writeln(tarr[0]);
	document.writeln(parr[0]);

	start();
}

function keepGoing(){
	var goTo = prompt("What's your next step?");
	for(var i = 0; i < tarr.length; i++){
		if(goTo === tarr[i]){
			next(i);
		}
	}
	console.log("THE END");
}

function next(index){
	document.writeln(tarr[index]);
	document.writeln(parr[index]);
	keepGoing();
}
