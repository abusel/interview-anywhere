class Api::UsersController < ApplicationController
    def create
        user = User.create!(user_params)
        # user.video.attach(params[:video])
        Cloudinary::Uploader.upload("https://upload.wikimedia.org/wikipedia/commons/a/ae/Olympic_flag.jpg",
  :public_id => "olympic_flag")
        render json: user, status: :created
    end

    def index
        users = User.all
        render json: users
    end

    private
    def user_params
        params.permit(:name, :video)
    end
end
