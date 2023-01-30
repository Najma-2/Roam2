class DestinationSerializer < ActiveModel::Serializer
  attributes :id, :country, :city, :star_rating, :img, :users, :attractions
end
