class Comment < ApplicationRecord
  belongs_to :user #different user from the post user
  belongs_to :post
end
