class UsersController < ApplicationController

  def index
    users = User.all
    render json: users
  end 

  def new 
    @user = User.new
  end

  def create
  params.inspect
    user = User.new(user_params)
    if user.save!
      session[:user_id] = user.id
      # render "hit this save point!!"
    else
      # render "html"
    end
  end
  
  # def findFriends
  #   @user = User.find(1)
  #   User.where(id: @user[:friend_id])
  # end

  private 
  
  def user_params
    params.require(:user).permit(:name, :email, :password)
  end


end
