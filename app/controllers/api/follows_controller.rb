class Api::FollowsController < ApplicationController
  def index
    @follows = Follow.all
    render :index
  end

  def show
    @follow = Follow.find_by(id: params[:id])
    render :show
  end

  def create
    @follow = Follow.new(follow_params)
    if @follow.save
      render :show
    else
      render json: @follow.errors.full_messages, status: 422
    end
  end

  def destroy
    @follow = Follow.find_by(id: params[:id])
    if @follow.destroy
      render :show
    else
      render json: @follow.errors.full_messages, status: 422
    end
  end

  private
  def follow_params
    params.require(:follow).permit(:followee_id, :follower_id, :id)
  end
end
