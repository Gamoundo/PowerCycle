class User < ApplicationRecord
    has_many :reviews
    has_many :games, through: :reviews

    validates :name, presence: true, uniqueness: {case_sensitive: false}
end
