RailsJwtAuth.setup do |config|
  # authentication model class name
  #config.model_name = 'User'

  # field name used to authentication with password
  #config.auth_field_name = 'email'

  # set to true to validate auth_field email format
  #config.auth_field_email = true

  # regex used to Validate email format
  #config.email_regex = /\A([^@\s]+)@((?:[-a-z0-9]+\.)+[a-z]{2,})\z/i

  # expiration time for generated tokens
  #config.jwt_expiration_time = 7.days

  # the "iss" (issuer) claim identifies the principal that issued the JWT
  #config.jwt_issuer = 'RailsJwtAuth'

  # number of simultaneously sessions for an user
  config.simultaneous_sessions = 1

  # mailer sender
  config.mailer_sender = 'noreply@budget.jana19.org'

  # url used to create email link with confirmation token
  config.confirmation_url = Rails.env.production? ? 'https://budget.jana19.org/confirmation' : 'http://localhost:3000/confirmation'

  # expiration time for confirmation tokens
  #config.confirmation_expiration_time = 1.day

  # url used to create email link with reset password token
  config.reset_password_url = Rails.env.production? ? 'https://budget.jana19.org/reset_password' : 'http://localhost:3000/reset_password'

  # url used to create email link with set password token
  config.set_password_url = Rails.env.production? ? 'https://budget.jana19.org/set_password' : 'http://localhost:3000/set_password'

  # expiration time for reset password tokens
  #config.reset_password_expiration_time = 1.day

  # uses deliver_later to send emails instead of deliver method
  #config.deliver_later = false

  # Invitable configuration
  #
  # Time an invitation is valid after sent
  # config.invitation_expiration_time = 2.days
  #
  # URL used to create email link to activate invitation
  # config.invitation_url = Rails.env.production? ? 'https://budget.jana19.org/accept_invitation' : 'http://localhost:3000/accept_invitation'
end
