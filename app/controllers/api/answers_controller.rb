class Api::AnswersController < ApplicationController
    def index
        answers = Answer.all
        render json: answers
    end

    def create
        answer = Answer.create!(answer_params)
        render json: answer, status: :created
    end


    private
    def answer_params
        params.permit(:link, :duration, :interview_id)
    end
end
