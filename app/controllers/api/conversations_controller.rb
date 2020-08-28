class Api::ConversationsController < ApplicationController

    def index
        @conversations = Conversation.all
        render :index
    end

    def show 
        @conversation = Conversation.find_by(id: params[:id])
        if @conversation
            render :show 
        else
            render json: ['Conversation not found'], status: 404
        end
    end

    def create 
        @conversation = Conversation.new(convo_params)
        
        @conversation.admin_id = current_user.id 
        @subscription = Subscription.new(user_id: current_user.id , conversation_id: @conversation.id)
        if @conversation.save && @subscription.save
            render :show
        else  
            render json: @conversation.errors.full_messages + @subscription.errors.full_messages, status: 422
        end
    end

    def destroy
        @conversation = Conversation.find(params[:id])
        if @conversation
            @conversation.destroy 
            @conversation = Conversation.all.first
            render :show
        else
            render json: @conversation.errors.full_messages, status: 420
        end
    end

    private
    def convo_params
        params.require(:conversation).permit(:name, :description, :is_private, :conversation_type)
    end
end
