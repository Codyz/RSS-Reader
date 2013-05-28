class SessionsController < ApplicationController
  def new
    @user = User.new
  end

  def create
    @user = User.find_by_email(params[:email])

    if @user.authenticate(params[:password])
      @user.session_token = SecureRandom.hex
      @user.save
      cookies.permanent['session_token'] = @user.session_token

      redirect_to root_url
    else
      render :new
    end
  end

  def destroy
    cookies.delete(:session_token)
    redirect_to new_session_url
  end
end