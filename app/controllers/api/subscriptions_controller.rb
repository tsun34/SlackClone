class Api::SubscriptionsController < ApplicationController

    def index
        if params[:conversation_id]
            @subscriptions = Subscription.where(conversation_id: params[:conversation_id].includes(:user))
        end
        if @subscriptions
            render :index
        else
            render json: @messages.errors.full_messages, status: 420
        end
    end

    def create
        @subscription = Subscription.new(sub_params)
        if @subscription.save 
            render :show
            # sub_params = {

            # }
            #broadcast_to channel?
        else
            render json: @subscription.errors.full_messages, status: 422
        end
    end

    private
    def sub_params
        params.require(:subscription).permit(:user_id, :conversation_id)
    end

end
