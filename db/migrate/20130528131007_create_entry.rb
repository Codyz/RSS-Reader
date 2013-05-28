class CreateEntry < ActiveRecord::Migration
  def change
    create_table :entries do |t|
      t.integer :feed_id
      t.integer :guid
      t.timestamps
    end
  end
end
