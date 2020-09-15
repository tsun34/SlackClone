class Subscription < ApplicationRecord
    validates :user_id, :conversation_id, presence: true
    
    belongs_to :user,
        foreign_key: :user_id,
        class_name: :User 

    belongs_to :conversation,
        foreign_key: :conversation_id,
        class_name: :Conversation
end