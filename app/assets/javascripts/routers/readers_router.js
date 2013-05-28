R.Routers.ReadersRouter = Backbone.Router.extend ({
  initialize: function(sidebar, content, feeds) {
    this.$sidebar = $(sidebar);
    this.$content = $(content);
    this.feeds = feeds;
  },

  routes: {
    "users/:id/feeds": "index"
    "new": "create",
    "users/:id/feeds/:id": "show"
  },

  index: function() {
    var that = this;

    var feedsIndexView = new R.Views.FeedsIndexView({
      collection: that.feeds
    });

    that.$sidebar.html(feeds.IndexView.render().$el);
    that.$content.html("<H1>Contents Here</h1>");
  }


})