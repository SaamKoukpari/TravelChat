class CreateLikes < ActiveRecord::Migration[5.2]
  def change
    create_table :likes do |t|
      t.integer :user_id
      t.integer :post_id
      t.timestamp :liked_at

      t.timestamps
    end
  end
end
