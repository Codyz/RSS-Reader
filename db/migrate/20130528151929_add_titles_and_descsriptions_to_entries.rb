class AddTitlesAndDescsriptionsToEntries < ActiveRecord::Migration
  def change
    add_column :entries, :title, :string
    add_column :entries, :description, :text
  end
end
