/*
Type: Model
File location: album.js
Use Case: Album is used for managing a
					collection of photos to eventually pass
					on to the canvas for presentation details.
*/
function Album(queryInput, controller){
	this.controller = controller
	this.queryInput = queryInput;
	this.access_token = ACCESS_TOKEN;
	this.queryString = "https://api.instagram.com/v1/tags/"+ this.queryInput +"/media/recent?access_token=" + this.access_token;
	this.photos = [];
	this.init();
}

Album.prototype = {
	init: function(){
		console.log("Album here!");
		this.fetchPhotos();
	},
	fetchPhotos: function(){
		$.ajax({
			url: this.queryString, 
			jsonp: "callback",
			dataType: "jsonp",
			success: this.selectStandardUrl.bind(this.controller)
		});
	},
	selectStandardUrl: function(response){
		this.album.photos = _.map(response.data, function(media){
									return media.images.standard_resolution.url;
								});
		this.display();
	}
}