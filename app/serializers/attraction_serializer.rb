class AttractionSerializer < ActiveModel::Serializer
  attributes :id, :location, :rating, :destination_id, :user_id
end
