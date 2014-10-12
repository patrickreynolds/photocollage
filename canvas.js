/*
Type: View
File location: canvas.js
Use Case: Canvas is used for displaying an album,
					or collections of albums to the screen.
*/

function Canvas(){
	this.init();
	this.$collage = $(".collage")
}

Canvas.prototype = {
	init: function(){
	},
	query: function(){
		return $("#queryString").val();
	},
	loadPhotos: function(){
		
	},
	render: function(photos){
		this.$collage.hide().empty();
		this.loadPhotos
		for(var index in photos){
			this.$collage.prepend("<img src=\""+ photos[index] +"\" class=\"image-responsive col-xs-3\">");
		}
		var counter = 0,
				_this = this;
		$('img').load(function() {
			console.log(counter)
			if (++counter >= photos.length) {
 				_this.$collage.fadeIn()
 			}
		})

		
	}
}