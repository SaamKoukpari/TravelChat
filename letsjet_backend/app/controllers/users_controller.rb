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
      render "hit this save point!!"
      # redirect_to 'users#index'
    else
      render "html"
      #redirect_to '/signup'
    end
  end
  
  private 
  
  def user_params
    params.require(:user).permit(:name, :email, :password)
  end


end
