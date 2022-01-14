class JobSerializer < ActiveModel::Serializer
  attributes :id, :title
  has_many :questions
end
