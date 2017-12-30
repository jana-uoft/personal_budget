class RegistrationsController < RailsJwtAuth::RegistrationsController

  def destroy
    authenticate!
    current_user.destroy
    render_204
  end


end