class CreateSubscriptions < ActiveRecord::Migration[5.2]
  def change
    create_table :subscriptions do |t|
      t.integer :user_id, null: false
      t.integer :conversation_id, null: false

      t.timestamps
    end
    add_index :subscriptions, :user_id
    add_index :subscriptions, :conversation_id
  end
end
