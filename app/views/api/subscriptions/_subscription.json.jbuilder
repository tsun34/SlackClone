json.set ! sub.id do
    json.extract! sub, :id, :user_id, :conversation_id
end