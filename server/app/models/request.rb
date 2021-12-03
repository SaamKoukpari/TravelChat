class Request < ApplicationRecord
  belongs_to :user
  has_one :user, :class_name => 'User'
end 
