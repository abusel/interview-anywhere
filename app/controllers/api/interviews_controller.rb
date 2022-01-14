class Api::InterviewsController < ApplicationController
    def index
        interviews = Interview.all
        render json: interviews
    end

    def create
        user = User.find(params[:user_id])
        interview = user.interviews.create!(interview_params)
        render json: interview
    end


    private
    def interview_params
        params.permit(:job_id, :user_id)
    end
end
