class Api::MessagesController < ApplicationController

    def create
        @message = Message.new(msg_params)
        @message.author_id = current_user.id;
        @message.conversation_id = 0; #???
        
        if @message.save
            #do something
        else
            #show error
        end
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
        params.require(:message).permit(:body)
    end
end
