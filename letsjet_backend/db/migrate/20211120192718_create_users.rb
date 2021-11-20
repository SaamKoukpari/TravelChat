class CreateUsers < ActiveRecord::Migration[5.2]
  def change
    create_table :users do |t|
      t.integer "friends_id"
      t.integer "post_id"
      t.integer "calendar_id"
      t.string "email"
      t.string "password"
      t.string "hometown"
      t.string "name"
      t.string "location"
      t.string "profile_picture"
      t.text "description"
      t.boolean "active"
      t.boolean "traveller"
      t.boolean "local"
      t.date "birthday"
    end
  end
end
