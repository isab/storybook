var tarr = new Array();

function newPassage(){
	var title = document.getElementById('titleID');
	var plot = document.getElementById('plotID');
	var linkTo = document.getElementById('linkToID');

	tarr.push(title);

	var workspace = document.getElementById('workspaceID');
	workspace.appendChild(title);
	workspace.appendChild(plot);
	workspace.appendChild(linkTo);

}

function existingTitles(){
	tarr.sort();
	for(var i = 0; i < tarr.length; i++){
		console.log(tarr[i]);
	}
}
