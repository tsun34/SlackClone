class Api::ConversationsController < ApplicationController

    def index
        @conversations = Conversation.all
    end

    def show 
        @conversation = Conversation.find(params[:id])

    end

    def create 
        @conversation = Conversation.new(convo_params)
        @conversation.admin_id = current_user.id 
        @conversation.conversation_type = ''
        if @conversation.save 
            #show convo page
        else  
            #render error
        end
    end

    def destroy
        @conversation = Conversation.find(params[:id])
        @conversation.destroy 
        #redirect to general page
    end

    private
    def convo_params
        params.require(:conversation).permit(:name, :description, :is_private)
    end
end
