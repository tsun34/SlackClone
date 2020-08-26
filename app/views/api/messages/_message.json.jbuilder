json.set! msg.id do 
    json.extract! msg, :id, :body, :author_id, :conversation_id, :created_at, :updated_at
        json.author_name msg.author.full_name
end
