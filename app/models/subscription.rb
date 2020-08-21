class Subscription < ApplicationRecord
    belongs_to :user,
        foreign_key: :user_id,
        class_name: :User 

    belongs_to :conversation,
        foreign_key: :conversation_id,
        class_name: :Conversation
end