class AddPhotosToPosts < ActiveRecord::Migration[5.2]
  def change
    change_column :posts, :photo_id, :integer, array: true, default: [], using: 'ARRAY[photo_id]::INTEGER[]'
  end
end
