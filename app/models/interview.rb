class Interview < ApplicationRecord
    belongs_to :job
    belongs_to :user
    has_many :answers

    validate :job_user



    def job_user
        Interview.all.each do |interview|
            if job_id == interview.job_id && user_id == interview.user_id
                errors.add(:user_id, "cannot have another interview with the same job")
            end
        end

    end
end
