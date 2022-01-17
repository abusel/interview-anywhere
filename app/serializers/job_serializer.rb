class JobSerializer < ActiveModel::Serializer
  attributes :id, :title, :user_id
  has_many :questions
end
