class Job < ApplicationRecord
    has_many :interviews
    has_many :users, through: :interviews
    belongs_to :user
    has_many :questions
end
