class UsersController < ApplicationController
  def new
    @user = User.new
    @user.feeds.build
  end

  def create
    @user = User.new(params[:user])

    if @user.save
      # flash[success] = "User saved"
      redirect_to root_url
    else
      # flash.error = "Something went wrong"
      render :new
    end
  end

  def show
    @user = User.find(params[:id])
  end
end