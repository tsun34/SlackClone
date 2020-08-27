class Api::MessagesController < ApplicationController

    def index
        # @conversation = Conversation.find(params[:conversation_id])
        if params[:conversation_id]
            @messages = Message.where(conversation_id: params[:conversation_id]).inludes(:author)
        end

        if @messages
            render :index     
        else
            render json: @messages.errors.full_messages, status: 420       
        end
    end

    def create
        @message = Message.new(msg_params)
        @message.author_id = current_user.id;
        @message.conversation_id = params[:conversation_id]
        # conversation = Conversation.find(msg_params['conversation_id'])
        
        if @message.save
            render :show
            # ConversationChannel.broadcast_to(conversation, {
            #     conversation: 
            # })
        else
            render json: @message.errors.full_messages, status: 422
        end
        # render json: MessageSerializer.new(@message)
    end

    def update 
        @message = Message.find_by(id: params[:id])
        if @message.update(msg_params)
            render :show
        else
            render json: @message.errors.full_messages, status: 422
        end
    end

    private 
    def msg_params
        params.require(:message).permit(:body)
    end
end
