class Api::UsersController < ApplicationController
    # skip_before_action :authorize, only: :create
    def create
        user = User.create!(user_params)
        session[:user_id] = user.id
        render json: user, status: :created
    end

    def show
        user = User.find(session[:user_id])
        if user
            render json: user, status: :created
        else
            render json: {error: 'unauthorized'}, status: :unauthorized
        end
    end

    def index
        users = User.all
        render json: users
    end

    private
    def user_params
        params.permit(:name, :email, :is_company, :password)
    end
end
