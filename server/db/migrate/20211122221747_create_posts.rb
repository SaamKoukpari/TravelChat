class CreatePosts < ActiveRecord::Migration[5.2]
  def change
    create_table :posts do |t|
      t.integer :user_id
      t.integer :photo_id
      t.integer :comment_ids
      t.text :content
      t.integer :likes
      t.boolean :published
      t.timestamp :posted_at

      t.timestamps
    end
  end
end