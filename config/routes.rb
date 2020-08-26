Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root 'static_pages#root'

  namespace :api, defaults: {format: :json} do 
    resources :users, only: [:index, :create]
    resource :session, only: [:create, :destroy]
    resources :messages, only: [:index, :create, :update]
    resources :conversations, only: [:index, :show, :create, :destroy]
  end
  mount ActionCable.server => '/cable'
end
