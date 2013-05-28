class AddTitlesToFeeds < ActiveRecord::Migration
  def change
    add_column :feeds, :title, :string
  end
end
