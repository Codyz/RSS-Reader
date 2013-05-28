R.Routers.FeedsRouter = Backbone.Router.extend ({
  initialize: function(sidebar, content, feeds) {
    this.$sidebar = $(sidebar);
    this.$content = $(content);
    this.feeds = feeds;
  },

  routes: {
    "": "index",
    "feeds/:id": "show",
    "feeds/:feed_id/entries/:entry_id": "entryShow"
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
      collection: that.feeds.get(id).get('entries')
    });
    that.$content.html(feedEntriesView.render().$el);
  },

  entryShow: function(feed_id, entry_id) {
    var that = this;

    var entryView = new R.Views.EntryView({
      model: that.feeds.get(feed_id).get('entries').get(entry_id)
    });
    that.$content.html(entryView.render().$el);
  }


})