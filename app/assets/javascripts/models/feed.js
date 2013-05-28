R.Models.Feed = Backbone.RelationalModel.extend ({
  relations: [{
    type: Backbone.HasMany,
    key: 'entries',
    relatedModel: 'R.Models.Entry',
    collectionType: 'R.Collections.Entries',
    reverseRelation: {
      key: 'feed'
    }
  }]
  // urlRoot: ???
});