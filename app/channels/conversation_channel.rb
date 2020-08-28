class ConversationChannel < ApplicationCable::Channel
    def subscribed 
        # @conversation = Conversation.find_by(id: params[:conversation])
        stream_for 'conversation_channel'
    end 

    # def received(data)
    #     ConversationChannel.broadcast_to(@conversation, {conversation: @conversation, users: @conversation.users, message: @conversation.messages})
    # end

    # def unsubscribed
        
    # end

end