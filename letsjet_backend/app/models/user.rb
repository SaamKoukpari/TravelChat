class User < ApplicationRecord
  has_many :friend
  has_many :users, through: :friend
  has_many :post
  has_many :calendar
  has_many :comment
  
  # has_many :request
  #   foreign_key: :requestor_id, 
  #   class_name: :request
   
  # has_many :friend_requests_as_receiver, 
  #   foreign_key: :receiver_id, 
  #   class_name: :FriendRequest

  # has_many :friendships, -> (user) { where("friend_a_id = ? OR friend_b_id = ?", user.id, user.id) }
  # has_many :friends, through: :friendships


  # has_secure_password  

  validates :name, presence: true
  validates :email, presence: true, uniqueness: { case_sensitive: false }
  validates :password, length: {minimum: 6}



  # def self.authenticate_with_credentials(email, password)
  #   existing_email = email.downcase.strip #strip method removes whitespaces
    
  #   @user = User.find_by_email(existing_email)
  #   if @user && @user.authenticate(password) #authenticate is an instance method by has_secure_password gem
  #     @user
  #   else
  #     nil
  #   end
  # end

end
