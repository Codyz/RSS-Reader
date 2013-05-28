window.R = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},

  initialize: function(sideBar, content, feedData) {
    var feeds = new R.Collections.Feeds(feedData);

    new R.Routers.ReaderRouter(sideBar, content, feeds);

    Backbone.history.start();
  }
};