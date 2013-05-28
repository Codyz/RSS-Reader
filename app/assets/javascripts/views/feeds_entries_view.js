R.Views.FeedEntriesView = Backbone.View.extend ({
  render: function() {
    var that = this;

    var renderedContent = JST["feeds/show"]({
      entries: that.collection
    });

    that.$el.html(renderedContent);
    return that;
  }
})