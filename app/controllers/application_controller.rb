class ApplicationController < ActionController::Base
  protect_from_forgery

  def require_login
    if !!current_user
      redirect_to new_session_url
    end
  end

  def current_user
    User.find_by_session_token(cookies[session_token])
  end


end
