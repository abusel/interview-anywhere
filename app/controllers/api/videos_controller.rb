class Api::VideosController < ApplicationController
    def index
        videos = Video.all
        render json: videos
    end
    def create
        video = Video.create!(video_params)
        render json: video, status: :created
    end

    private
    def video_params
        params.permit(:url, :duration)
    end
end
