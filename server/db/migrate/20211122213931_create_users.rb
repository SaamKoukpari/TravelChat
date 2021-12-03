class CreateUsers < ActiveRecord::Migration[5.2]
  def change
    create_table :users do |t|
      t.integer :friend_id
      t.integer :post_id
      t.integer :calendar_id
      t.string :name
      t.string :email
      t.string :password
      t.date :birthday
      t.string :hometown
      t.string :location
      t.string :profile_picture
      t.text :description
      t.boolean :active
      t.boolean :traveller
      t.boolean :local

      t.timestamps
    end
  end
end
