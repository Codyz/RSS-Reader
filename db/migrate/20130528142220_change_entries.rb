class ChangeEntries < ActiveRecord::Migration
  def change
    remove_column :entries, :guid
    add_column :entries, :guid, :string
  end
end
