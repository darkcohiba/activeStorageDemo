class UserSerializer < ActiveModel::Serializer
  attributes :id, :name, :age, :sex, :image_url
end