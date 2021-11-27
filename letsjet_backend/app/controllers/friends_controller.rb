class FriendsController < ApplicationController
  def index
    friends = Friend.all
    render json: friends
  end

  def create
    friend = Friend.new(user_params)
    if friend.save!
      session[:friend_id] = friend.id
      # render "hit this save point!!"
    else
      # render "html"
    end
  end 

  def update
    puts params[:friend_Id]
    puts params[:id]

    friend = Friend.find(params[:id])
    friend.update(friend_Id: params[:friend_Id])

    render status: 200
  end 
end 
