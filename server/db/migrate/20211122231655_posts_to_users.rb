class PostsToUsers < ActiveRecord::Migration[5.2]
  def change
    change_column :users, :post_id, :integer, array: true, default: [], using: 'ARRAY[post_id]::INTEGER[]'
  end
end
