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
        # debugger
        # @message.author_id = current_user.id;
        # @message.conversation_id = params[:conversation_id]
        
        if @message.save
            render :show
            #create msg data hash , send to conversation 
            msg_data = {
                id: @message.id,
                body: @message.body,
                author_id: @message.author_id,
                conversation_id: @message.conversation_id,
                created_at: @message.created_at,
                updated_at: @message.updated_at
            } 
            ConversationChannel.broadcast_to('conversation_channel', msg_data)
            #     conversation: msg_data
            # }) #msg_data)
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
        params.require(:message).permit(:body, :author_id, :conversation_id)
    end
end
