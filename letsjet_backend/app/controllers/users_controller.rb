class UsersController < ApplicationController

  def index
    users = User.all
    render json: users
  end 

  def new 
    @user = User.new
  end

  def create
    user = User.new(user_params)
    if user.save!
      session[:user_id] = user.id
      # render "hit this save point!!"
    else
      # render "html"
    end
  end

  def update
    user = User.find(params[:id])
    if user.update_attributes(user_params)
      render json: user
    else 
      puts user.errors.full_messages
    end
  end  


  private 
  
  def user_params
    params.require(:user).permit(:name, :email, :password, :description, :comments, post_id:[], friend_id:[])
  end
end