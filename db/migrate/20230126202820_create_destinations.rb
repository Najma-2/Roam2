class CreateDestinations < ActiveRecord::Migration[7.0]
  def change
    create_table :destinations do |t|
      t.string :country
      t.string :city
      t.string :img
      t.integer :star_rating

      t.timestamps
    end
  end
end
