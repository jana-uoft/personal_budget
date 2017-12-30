class ApplicationController < ActionController::API
  include RailsJwtAuth::WardenHelper
  rescue_from Exception, :with => :error_generic

  protected
  def error_generic(exception)
    render json: {error: exception.message}, status: :internal_server_error
  end
end
