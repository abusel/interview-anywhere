class JobSerializer < ActiveModel::Serializer
  attributes :id, :title, :user_id, :created_at
  has_many :questions
  has_many :users
  belongs_to :user
end
