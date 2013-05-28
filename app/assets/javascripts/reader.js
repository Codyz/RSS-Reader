window.R = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},

  initialize: function(sideBar, content, feedData) {
    console.log(feedData);
    var feeds = new R.Collections.Feeds(feedData);
    console.log("initializing router")
    console.log(feeds);
    new R.Routers.FeedsRouter(sideBar, content, feeds);

    Backbone.history.start();
  }
};