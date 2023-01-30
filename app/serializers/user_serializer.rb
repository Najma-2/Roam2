class UserSerializer < ActiveModel::Serializer
  attributes :id, :name, :username, :img, :destinations, :attractions
  has_many :attractions
  has_many :destinations, through: :attractions
end
