class Api::SessionsController < ApplicationController
    skip_before_action :verify_authenticity_token
    
    def create
        #user login 
        @user = User.find_by_credentials(params[:user][:email], params[:user][:password])
        if @user 
            login(@user)
            render 'api/users/show' #json: ['creating a new session']
        else
            render json: ['invalid email and/or password'], status: 401
        end
    end

    def destroy 
        #user logout
        @user = current_user
        if @user 
            logout 
            # render 'api/users/show' #json:['user logged out successfully']
        else
            render json: ['No one was signed in'], status: 404
        end
    end
end
