module RailsJwtAuth
  module RenderHelper
    def render_session(jwt, user)
      render json: {jwt: jwt}, status: 201
    end

    def render_registration(user)
      render json: {message: "Email sent to #{user.email} for confirmation."}, status: 201
    end

    def render_204
      render json: {}, status: 204
    end

    def render_422(errors)
      render json: {errors: errors}, status: 422
    end

    def render_500(error)
      render json: {error: error}, status: 500
    end
  end
end