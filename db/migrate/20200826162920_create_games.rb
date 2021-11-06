class CreateGames < ActiveRecord::Migration[6.0]
  def change
    create_table :games do |t|
      t.string :name
      t.string :genre
      t.string :developer
      t.string :img
      t.string :esrb

      t.timestamps
    end
  end
end
