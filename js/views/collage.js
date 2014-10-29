// js/views/collage.js

var collage = collage || {}

collage.CollageView = Backbone.View.extend({
  
  el: '.collage',

  template: _.template( $("#collage-template").html() ),

  events: {
    'submit .search-box': 'searchPhotos',
  },

  initialize: function() {
    this.$grid = $(".photo-grid")
    this.$input = this.$('.query-input')
    this.clear()
  },

  render: function() {
    var that = this
    this.clear()
    this.collection.forEach(function(photo) {
      var newPhoto = that.renderPhoto(photo)
      that.$grid.append(newPhoto)
    })
    return this
  },

  renderPhoto: function( photo ) {
    var view = new collage.PhotoView({ model: photo })
    return view.render().el
  },

  searchPhotos: function( event ) {
    event.preventDefault()
    if (!this.$input.val().trim()) {
      return
    }

    
    $.ajax({
      url: "https://api.instagram.com/v1/tags/" + this.$input.val()
      + "/media/recent?access_token=" + collage.ACCESS_TOKEN,
      dataType: "jsonp",
      success: function( res ) {
        collage.CollageView.collection = new collage.Album(res.data)
        collage.CollageView.render()
      }
    })
  },

  clear: function() {
    this.$input.val('')
    this.$grid.html('')
  }
})
