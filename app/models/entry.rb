class Entry < ActiveRecord::Base
  attr_accessible :feed_id, :guid

  validates :feed_id, presence: true

  belongs_to :feed
end