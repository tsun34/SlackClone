json.conversation do 
    json.extract! @conversation, :id, :name, :description, :admin_id, :is_private, :conversation_type
end 

json.messages do 
    json.array! @conversation.messages
end

json.subscriptions do 
    json.array! @conversation.subscriptions
end