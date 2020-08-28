Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root 'static_pages#root'

  namespace :api, defaults: {format: :json} do 
    resources :users, only: [:index, :create, :show]
    resource :session, only: [:create, :destroy]

    resources :conversations, only: [:index, :show, :create, :destroy]
    resources :conversations do 
      resources :messages, only: [:index]
    end
    resources :messages, only: [:create, :update]
  end
  mount ActionCable.server => '/cable'
end
