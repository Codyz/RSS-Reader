R.Routers.FeedsRouter = Backbone.Router.extend ({
  initialize: function(sidebar, content, feeds) {
    this.$sidebar = $(sidebar);
    this.$content = $(content);
    this.feeds = feeds;
  },

  routes: {
    "": "index",
    "feeds/:id": "show"
  },

  index: function() {
    var that = this;

    var feedsIndexView = new R.Views.FeedsIndexView({
      collection: that.feeds
    });

    that.$sidebar.html(feedsIndexView.render().$el);
  },

  show: function(id) {
    var that = this;

    var feedEntriesView = new R.Views.FeedEntriesView({
      collection: that.feeds.get(id).get('entries'),
      id: that.id
    });
    that.$content.html(feedEntriesView.render().$el);
  }
})