class Api::BlogsController < ApplicationController
  # commentted for testing uncomment when FRONTEND UP
  before_action :authenticate_user!

  # has been checked
  def index
    # commentted for testing uncomment when FRONTEND UP
    render json: current_user.blogs
    #render json: User.find(5).blogs
  end

  # has been checked
  def create
    # used for testing uncomment when FRONTEND UP
    # blog = User.find(5).blogs.new(blog_params)
    blog = current_user.blogs.new(blog_params)
    if blog.save
      render json: blog
    else
      render json: { error: "unsuccesfull", statys: 422 }
    end
  end

  private

  def blog_params
    params.require(:blog).permit(:title, :body)
  end
end
