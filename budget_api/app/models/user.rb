class User
  include Mongoid::Document
  include RailsJwtAuth::Authenticatable
  include RailsJwtAuth::Confirmable
  include RailsJwtAuth::Recoverable
  include RailsJwtAuth::Invitable
  include RailsJwtAuth::Trackable

  field :first_name, type: String, default: ""
  field :last_name, type: String, default: ""
end
