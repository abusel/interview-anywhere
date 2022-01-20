Rails.application.routes.draw do
  

  namespace :api do
    resources :users
    resources :videos
    resources :jobs
    resources :questions
    resources :interviews
    resources :answers
    post "/signup", to: "users#create"
    get "/interviewjob/:id", to: 'interviews#showjob'
    get "/recentinterviews/:id", to: 'interviews#lastFive'

    get "/me", to: "users#show"
    post "/login", to: "sessions#create"
    delete "/logout", to: "sessions#destroy"
  end
  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end
