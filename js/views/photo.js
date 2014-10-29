// js/views/photo.js

var collage = collage || {}

collage.PhotoView = Backbone.View.extend({
  
  className: 'photo-box',
  
  template: _.template( $( '#photoTemplate' ).html() ),

  render: function() {
    this.$el.html( this.template(this.model.toJSON()))
    return this
  }
})
