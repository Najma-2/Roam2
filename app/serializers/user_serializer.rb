class UserSerializer < ActiveModel::Serializer
  attributes :id, :name, :username, :img, :destinations, :attractions
end
