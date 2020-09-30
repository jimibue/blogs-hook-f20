class Api::BlogsController < ApplicationController
  before_action :authenticate_user!

  def index
    render json: current_user.blogs
  end

  def create
    blog = current_user.blogs.save(blog_params)
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
