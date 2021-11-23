class CalendarsToUsers < ActiveRecord::Migration[5.2]
  def change
    change_column :users, :calendar_id, :integer, array: true, default: [], using: 'ARRAY[calendar_id]::INTEGER[]'
  end
end
