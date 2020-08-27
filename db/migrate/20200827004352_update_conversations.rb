class UpdateConversations < ActiveRecord::Migration[5.2]
  def change
    remove_column :conversations, :is_private
    add_column :conversations, :is_private, :boolean, default: false 
  end
  
end
