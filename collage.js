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
})

function Collage(){
	this.init();
}

Collage.prototype = {
	init: function(){
		console.log("Collage here!");
		this.bindEvents();
	},
	bindEvents: function(){
		$("#query").on('submit', this.display.bind(this));
	},
	display: function(event){
		event.preventDefault();
		this.album = new Album(this.canvas.query());
	}
}