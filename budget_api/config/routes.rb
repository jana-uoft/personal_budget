Rails.application.routes.draw do
  # Authentication Endpoints
  resource :invitation, controller: 'rails_jwt_auth/invitations', only: [:create, :update]
  resource :registration, controller: 'rails_jwt_auth/registrations', only: [:create, :update, :destroy]
  resource :confirmation, controller: 'rails_jwt_auth/confirmations', only: [:create, :update]
  resource :session, controller: 'rails_jwt_auth/sessions', only: [:create, :destroy]
  resource :password, controller: 'rails_jwt_auth/passwords', only: [:create, :update]
end
