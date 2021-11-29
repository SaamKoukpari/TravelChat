class PostsController < ApplicationController
  def index
    posts = Post.all
    render json: posts
  end 

  def create
    post = Post.new(post_params)
    if post.save!
      session[:post_id] = post.id
      render json: post
      # render "hit this save point!!"
    else
      # render "html"
    end
  end

  private

  def post_params
    params.require(:post).permit(:user_id, :content, post_id:[])
  end

end
