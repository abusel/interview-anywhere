class Api::JobsController < ApplicationController
    def index
        user = User.find(session[:user_id])
        jobs = user.jobs
        render json: jobs, status: :ok
    end

    def create
        user = User.find(session[:user_id])
        recipe = user.jobs.create!(job_params)
        render json: recipe, status: :created
    end

    def show
        job = Job.find(params[:id])
        render json: job, status: :ok
    end

    private
    def job_params 
        params.permit(:user_id, :title, :allow_multiple_attempts)
    end
end
