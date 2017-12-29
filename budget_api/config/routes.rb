Rails.application.routes.draw do
  # Authentication Endpoints
  resource :registration, controller: 'registrations', only: [:create, :update, :destroy]
  resource :confirmation, controller: 'rails_jwt_auth/confirmations', only: [:create, :update]
  resource :session, controller: 'rails_jwt_auth/sessions', only: [:create, :destroy]
  resource :password, controller: 'rails_jwt_auth/passwords', only: [:create, :update]

  resources :transactions
  resources :categories
  resources :groups
  resources :accounts
  resources :budgets
  
end
