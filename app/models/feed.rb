require 'open-uri'

class Feed < ActiveRecord::Base
  attr_accessible :url, :user_id, :title

  validates :user, :url, presence: true

  belongs_to :user, inverse_of: :feeds
  has_many :entries

  def fetch_all
    feed = SimpleRSS.parse(open(self.url))
    guids = Entry.joins(:feed).where('entries.feed_id = ?', self.id).pluck("guid")

    feed.items.each do |item|
      next if guids.include?(item.guid)

      create_entry(item)
    end
  end

  def create_entry(item)
    new_entry = self.entries.build(guid: item[:guid], title: item[:title],
     description: item[:description])
    new_entry.save
  end
end