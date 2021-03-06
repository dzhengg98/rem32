class Api::UsersController < ApplicationController
  before_action :require_logged_in, only: [:show, :update]

  def show
    @user = User.find_by(id: params[:id])
    render :show
  end

  def create
    @user = User.new(user_params)
    if @user.save
      login(@user)
      render :show
    else
      render json: @user.errors.full_messages, status: 422
    end
  end

  def update
    @user = User.find_by(id: params[:id])
    if @user.id == current_user.id && @user.update(user_params)
      render :show
    else
      render json: @user.errors.full_messages, status: 422
    end
  end

  def index
    @users = User.all
    render :index
  end

  private
  def user_params
    params.require(:user)
          .permit(:username, 
            :password, 
            :first_name, 
            :last_name, 
            :city, 
            :country, 
            :about, 
            :website, 
            :instagram, 
            :facebook, 
            :twitter, 
            :profilepic, 
            :coverpic)
  end
end