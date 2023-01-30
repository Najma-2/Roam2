class User < ApplicationRecord
    has_many :attractions
    has_many :destinations, through: :attractions

    has_secure_password
    validates :username, uniqueness: true
end
