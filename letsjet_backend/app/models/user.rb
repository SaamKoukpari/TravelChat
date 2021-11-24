class User < ApplicationRecord
  has_many :friend
  has_many :users, through: :friend
  has_many :request 
  has_many :post
  has_many :calendar

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
