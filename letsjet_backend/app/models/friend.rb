class Friend < ApplicationRecord
  belongs_to :user
  belongs_to :friend, :class_name => 'User'

  # belongs_to :friend_a, class_name: :User
  # belongs_to: :friend_b, class_name: :User

end
