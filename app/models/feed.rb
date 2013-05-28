class Feed < ActiveRecord::Base
  attr_accessible :url, :user_id

  validates :user, :url, presence: true

  belongs_to :user, :inverse_of :feeds
  has_many :entries
end