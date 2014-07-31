/*
Type: Controller
File location: canvas.js
Use Case: The controller is used to communicate user
					input search queries and the passing of model
					information to the view.
*/

$(function(){
	console.log("Kicking off canvas.");
	var collage = new Collage();
	collage.canvas = new Canvas();
	collage.album = new Album();
})

function Collage(){
	this.init();
}

Collage.prototype = {
	init: function(){
		console.log("Collage here!");
	},
	bindEvents: function(){
	},
	display: function(){
	}
}