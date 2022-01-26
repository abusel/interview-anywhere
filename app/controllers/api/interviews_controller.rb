class Api::InterviewsController < ApplicationController
    before_action :authorize, only: [:create, :destroy]
    
    def index
        interviews = Interview.all
        render json: interviews
    end

    def create
        user = User.find(params[:user_id])
        interview = user.interviews.create!(interview_params)
        render json: interview
    end

    def show
        interview = Interview.find(params[:id])
        render json: interview
    end

    def showjob
        interviews =  Interview.where(job_id: params[:id])
        render json: interviews
    end

    def lastFive
        j = Job.where(user_id: params[:id])
        arr = j.map{ |job| job.id}
        interviews = Interview.all.select{|i| arr.include?(i.job_id)}
        last = interviews.last(5).reverse()
        render json: last
    end

    def destroy
        i = Interview.find(params[:id])
        i.destroy
        head :no_content
    end


    private
    def interview_params
        params.permit(:job_id, :user_id)
    end
end
