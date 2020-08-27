json.set! conversation.id do 
    json.extract! conversation, :id, :name, :description, :admin_id, :is_private, :conversation_type
    json.last_message conversation.messages.last
    json.messages do 
        json.array! conversation.messages
    end
end