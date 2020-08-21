class Message < ApplicationRecord
    validates :body, :author_id, :conversation_id, presence: true
    
    belongs_to :author,
        foreign_key: :author_id,
        class_name: :User 

    belongs_to :chat,
        foreign_key: :conversation_id,
        class_name: :Conversation

end
