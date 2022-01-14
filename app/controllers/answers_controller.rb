class AnswersController < ApplicationController
    def index
        answers = Answer.all
        render json: answers
    end

    def create
    end


    private
    def answer_params
        params.permit(:link, :duration, :interview_id)
    end
end
