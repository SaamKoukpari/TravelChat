class CreateCalendars < ActiveRecord::Migration[5.2]
  def change
    create_table :calendars do |t|
      t.integer :user_id
      t.string :location
      t.date :arrive
      t.date :leave

      t.timestamps
    end
  end
end
