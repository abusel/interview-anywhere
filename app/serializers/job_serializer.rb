class JobSerializer < ActiveModel::Serializer
  attributes :id, :title, :user_id
  has_many :questions
  has_many :users
end
