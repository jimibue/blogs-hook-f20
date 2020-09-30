class Api::BlogsController < ApplicationController
  # commentted for testing uncomment when FRONTEND UP
  # before_action :authenticate_user!

  def index
    # commentted for testing uncomment when FRONTEND UP
    # render json: current_user.blogs
    render json: User.last.blogs
  end

  def create
    # commentted for testing uncomment when FRONTEND UP
    # blog = current_user.blogs.save(blog_params)
    # blog = User.last.blogs.new(title: params[:title], body: params[:body])
    blog = User.last.blogs.new(blog_params)
    if blog.save
      render json: blog
    else
      render json: { error: "unsuccesfull", statys: 422 }
    end
  end

  private

  def blog_params
    # commentted for testing uncomment when FRONTEND UP
    # params.require(:blog).permit(:title, :body)
    params.permit(:title, :body)
  end
end
