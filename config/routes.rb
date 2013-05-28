RssReader::Application.routes.draw do
  resources :users do
    member do
      resources :feeds do
        member do
          resources :entries
        end
      end
    end
  end

  root to: "users#new"
end
