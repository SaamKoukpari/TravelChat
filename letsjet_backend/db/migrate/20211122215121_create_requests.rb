class CreateRequests < ActiveRecord::Migration[5.2]
  def change
    create_table :requests do |t|
      t.integer :user1_id
      t.integer :user2_id
      t.boolean :status
      t.boolean :accepted

      t.timestamps
    end
  end
end
