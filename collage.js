/*
Type: Controller
File location: canvas.js
Use Case: The controller is used to communicate user
					input search queries and the passing of model
					information to the view.
*/

var collage;

$(function(){
	console.log("Kicking off canvas.");
	collage = new Collage();
	collage.canvas = new Canvas();
	collage.init();
})

function Collage(){
}

Collage.prototype = {
	init: function(){
		console.log("Collage here!");
		this.bindEvents();
	},
	bindEvents: function(){
		$("#query").on('submit', this.initAlbum.bind(this));
	},
	initAlbum: function(){
		event.preventDefault();
		this.album = new Album(this.canvas.query(), this);
	},
	display: function(){
    this.canvas.render(this.album.photos);
	}
}