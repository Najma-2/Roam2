Rails.application.routes.draw do
  
  resources :attractions, only: [:create, :destroy]
  resources :destinations, only: [ :index, :show, :create, :update, :destroy]
  resources :users, only: [:show, :create]
  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  post "/signup", to: "users#create"
  get "/profile", to: "users#show"
  post "/login", to: "sessions#login"
  delete "/logout", to: "sessions#logout"

  get "/destinations", to: "destinations#index"
  get "/destinations/:id", to: "destinations#show"

  post "/attractions", to: "attractions#create"
  get "/attractions", to: "attractions#show"

  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end