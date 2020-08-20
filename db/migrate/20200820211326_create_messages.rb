class CreateMessages < ActiveRecord::Migration[5.2]
  def change
    create_table :messages do |t|
      t.text :body, null: false
      t.integer :author_id, null: false
      t.integer :conversation_id, null: false
      t.integer :parent_id

      t.timestamps
    end
    add_index :messages, :author_id
    add_index :messages, :conversation_id
  end
end
