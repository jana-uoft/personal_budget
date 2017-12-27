class ApplicationController < ActionController::API
    include RailsJwtAuth::WardenHelper
end
