class Api::UsersController < ApplicationController
    
    def show 
        @user = User.find_by(id: params[:id])
        if @user 
            render :show 
        else
            render json: @user.errors.full_messages, stauts: 404
        end
    end

    def create
        #user signup
        @user = User.new(user_params)
        @user.full_name = user_params[:email]
        @user.status = 1
        puts (@user)
        if @user.save
            login(@user)
            render 'api/users/show'#json: ['User logged in successfully']
        else 
            render json: @user.errors.full_messages, status: 422
        end
    end

    private
    def user_params 
        params.require(:user).permit(:email, :password)
    end
end
