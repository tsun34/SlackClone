class Api::UsersController < ApplicationController
    
    def index
        @users = User.all
        render :index
    end

    def show 
        @user = User.find_by(id: params[:id])
        if @user 
            render :show 
        else
            render json: @user.errors.full_messages, stauts: 404
        end
    end

    def create
        @user = User.new(user_params)
        @user.full_name = user_params[:email]
        @user.status = 1
        if @user.email == 'goosek@gmail.com'
            @user.avatar = 6
        elsif @user.email == 'gooseq@gmail.com'
            @user.avatar = 7
        else
            @user.avatar = rand(5)
        end

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
