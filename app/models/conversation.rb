class Conversation < ApplicationRecord
    validates :name, :admin_id, :is_private, :conversation_type, presence: true
    validates :name, uniqueness: true 

    has_many :messages, 
        foreign_key: :conversation_id,
        class_name: :Message 

    has_many :subscriptions,
        foreign_key: :conversation_id,
        class_name: :Subscription
end
