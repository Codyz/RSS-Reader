class FeedsController < ApplicationController
  before_filter :require_login
  respond_to :html, only: [:index]
  respond_to :json

  def new
    @feed = Feed.new(user_id: params[:id])
  end

  def create
    @feed = Feed.new(params[:feed])

    if @feed.save
      render json: @feed
    else
      render json: @feed.errors, status: 422
    end
  end

  def index
    @feeds = Feed.find_by_user_id(params[:id])

    respond_to do |format|
      format.html { render :index }
      format.json { render json: @feeds }
    end
  end

  def show
  end


end