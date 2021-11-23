class AddCommentsToCreatePosts < ActiveRecord::Migration[5.2]
  def change
    change_column :posts, :comment_ids, :integer, array: true, default: [], using: 'ARRAY[comment_ids]::INTEGER[]'
  end
end
