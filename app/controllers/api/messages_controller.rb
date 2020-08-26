class Api::MessagesController < ApplicationController

    def index
        @messages = Message.all
        render json: messages
    end

    def create
        @message = Message.new(msg_params)
        @message.author_id = current_user.id;
        conversation = Conversation.find(msg_params['conversation_id'])
        
        if @message.save
            # ConversationChannel.broadcast_to(conversation, {
            #     conversation: 
            # })
        end
        render json: MessageSerializer.new(@message)
    end

    def update 
        @message = Message.find(params[:id])
        if @message.update(msg_params)
            #do something
        else
            #show error
        end
    end

    private 
    def msg_params
        params.require(:message).permit(:body, :conversation_id)
    end
end
