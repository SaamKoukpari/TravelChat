class CreateFriends < ActiveRecord::Migration[5.2]
  def change
    create_table :friends do |t|
      t.integer :user1_id
      t.integer :user2_id
      t.timestamp :friends_since

      t.timestamps
    end
  end
end
