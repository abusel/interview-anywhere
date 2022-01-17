class InterviewSerializer < ActiveModel::Serializer
  attributes :id, :job_id, :user_id
  belongs_to :user
  has_many :answers
end
