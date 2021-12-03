class AddFriendsToUsers < ActiveRecord::Migration[5.2]
  def change
    change_column :users, :friend_id, :integer, array: true, default: [], using: 'ARRAY[friend_id]::INTEGER[]'
  end
end
