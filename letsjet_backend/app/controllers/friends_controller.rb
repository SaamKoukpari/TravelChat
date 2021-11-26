class FriendsController < ApplicationController
  def index
    friends = Friend.all
    render json: friends
  end

  def update
    puts params[:friend_Id]
    puts params[:id]

    friend = Friend.find(params[:id])
    friend.update(friend_Id: params[:friend_Id])

    render status: 200
  end 
end 
