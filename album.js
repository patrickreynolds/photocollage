/*
Type: Model
File location: album.js
Use Case: Album is used for managing a
					collection of photos to eventually pass
					on to the canvas for presentation details.
*/
function Album(){
	this.init();
}

Album.prototype = {
	init: function(){
		console.log("Album here!");
	}
}