R.Routers.FeedsRouter = Backbone.Router.extend ({
  initialize: function(sidebar, content, feeds) {
    this.$sidebar = $(sidebar);
    this.$content = $(content);
    this.feeds = feeds;
    console.log("initialized");
  },

  routes: {
    "": "index"
  },

  index: function() {
    var that = this;
    console.log(that.feeds);
    var feedsIndexView = new R.Views.FeedsIndexView({
      collection: that.feeds
    });

    that.$sidebar.html(feedsIndexView.render().$el);
    that.$content.html("<H1>Contents Here</h1>");
  }
})