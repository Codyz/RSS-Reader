RssReader::Application.routes.draw do
  resources :users

  resources :feeds do
    member do
      resources :entries
    end
  end

  resource :session

  root to: "feeds#index"
end
