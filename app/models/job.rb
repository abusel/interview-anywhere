class Job < ApplicationRecord
    has_many :interviews, dependent: :destroy
    has_many :users, through: :interviews
    belongs_to :user
    has_many :questions, dependent: :destroy

    validates :title, presence: true 
end
