class Api::JobsController < ApplicationController
    before_action :authorize, only: [:create, :destroy]

    def index
        jobs = Job.all
        render json: jobs, status: :ok
    end

    def create
        job = Job.create!(job_params)
        render json: job, status: :created
    end

    def show
        job = Job.find(params[:id])
        render json: job, status: :ok
    end

    def destroy
        job = Job.find(params[:id])
        job.destroy
        head :no_content
    end

    private
    def job_params 
        params.permit(:user_id, :title, :allow_multiple_attempts)
    end
end
