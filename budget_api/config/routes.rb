Rails.application.routes.draw do
  # Authentication Endpoints
  resource :registration, controller: 'registrations', only: [:create, :update, :destroy]
  resource :confirmation, controller: 'rails_jwt_auth/confirmations', only: [:create, :update]
  resource :session, controller: 'rails_jwt_auth/sessions', only: [:create, :destroy]
  resource :password, controller: 'rails_jwt_auth/passwords', only: [:create, :update]

  resources :transactions, only: [:create, :update, :destroy]
  resources :categories, only: [:create, :update, :destroy]
  resources :groups, only: [:create, :update, :destroy]
  resources :accounts, only: [:create, :update, :destroy]
  resources :budgets

  # Payee Actions
  put '/budgets/:id/payees', to: 'budgets#update_payee'
  put '/budgets/:id/combinePayees', to: 'budgets#combine_payees'
  delete '/budgets/:id/payees', to: 'budgets#delete_payees'


end
