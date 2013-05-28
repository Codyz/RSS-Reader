R.Views.FeedsIndexView = Backbone.View.extend ({
  render: function() {
    var that = this;
    console.log(that.collection);

    var renderedContent = JST["feeds/index"]({
      feeds: that.collection
    });

    that.$el.html(renderedContent);
    return that;
  }
})