class Api::SessionsController < ApplicationController

    def create
        #user login 
        @user = User.find_by_credentials(params[:user][:email], params[:user][:password])
        if @user 
            login(@user)
            render json: ['creating a new session']
        else
            render json: ['invalid email and/or password'], status: 401
        end
    end

    def destroy 
        #user logout
        @user = current_user
        if @user 
            logout 
            render json:['user logged out successfully']
        else
            render json: ['No one was signed in'], status: 404
        end
    end
end
