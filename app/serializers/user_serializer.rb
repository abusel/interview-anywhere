class UserSerializer < ActiveModel::Serializer
  attributes :id, :email, :name, :is_company

  has_many :interviews

end
