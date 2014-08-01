/*
Type: View
File location: canvas.js
Use Case: Canvas is used for displaying an album,
					or collections of albums to the screen.
*/

function Canvas(){
	this.init();
}

Canvas.prototype = {
	init: function(){
		console.log("Canvas here!");
	},
	query: function(){
		return $("#queryString").val();
	},
	render: function(photos){
		$(".collage").empty();
		for(var index in photos){
			$(".collage").prepend("<img src=\""+ photos[index] +"\" class=\"image-responsive col-xs-3\">");
		}
	}
}