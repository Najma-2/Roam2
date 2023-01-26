class CreateAttractions < ActiveRecord::Migration[7.0]
  def change
    create_table :attractions do |t|
      t.string :location
      t.integer :rating
      t.integer :destination_id
      t.integer :user_id

      t.timestamps
    end
  end
end
