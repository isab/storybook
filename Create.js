var tarr = new Array();

function newPassage(){
	var title = prompt("Title Please");
	var plot = prompt("Plot Please");
	var linkTo = prompt("Link To Which Other Passages>");

	tarr.push(title);

}

function existingTitles(){
	tarr.sort();
	for(var i = 0; i < tarr.length; i++){
		window.alert(tarr[i]);
	}
}
