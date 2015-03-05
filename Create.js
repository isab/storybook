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
		document.write(tarr[i]);
	}
}

function display(){
	for(var i = 0; i < tarr.length; i++){
		document.write(tarr[i]);
		document.write(parr[i]);
		document.write(larr[i]);
	}
}

function edit(){
	var index = prompt("Which number would you like to edit?");
	var option = prompt("Are you editing the Title, Prompt, or Links?");

	if(option === "title" || option === "Title"){
		var newT = prompt("New Title Please");
		tarr[index] = newT;
	}
	if(option === "plot" || option === "Plot"){
		var newP = prompt("New Plot Please");
		parr[index] = newP;
	}
	if(option === "links" || option === "Links"){
		var newL = prompt("New Links Please");
		larr[index] = newL;
	}
}

function play(){
	
}
