class RequestsController < ApplicationController

  def index
    requests = Request.all
    render json: requests
  end 

  def new 
    @requests = Request.new
  end 

  # def create
  #   user = User.new(params)
  #   if user.save!
  #     session[:user_id] = user.id
  #     # render "hit this save point!!"
  #   else
  #     # render "html"
  #   end
  # end

end
