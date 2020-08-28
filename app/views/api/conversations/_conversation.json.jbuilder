json.set! conversation.id do 
    json.extract! conversation, :id, :name, :description, :admin_id, :is_private, :conversation_type

end