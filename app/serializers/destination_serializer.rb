class DestinationSerializer < ActiveModel::Serializer
  attributes :id, :country, :city, :star_rating
  has_many :attractions
end
