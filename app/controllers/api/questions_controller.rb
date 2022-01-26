class Api::QuestionsController < ApplicationController

    before_action :authorize, only: [:create]

    def index
        questions = Question.all
        render json: questions
    end
    def create
        question = Question.create!(question_params)
        render json: question, status: :created
    end

    private
    def question_params
        params.permit(:link, :duration, :job_id)
    end
end
