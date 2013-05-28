R.Views.EntryView = Backbone.View.extend ({
  render: function() {
    var that = this;

    var renderedContent = JST["feeds/details"]({
      entry: that.model
    });

    that.$el.html(renderedContent);
    return that;
  }
})