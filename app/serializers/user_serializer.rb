class UserSerializer < ActiveModel::Serializer
  attributes :id, :email, :name, :is_company

end
