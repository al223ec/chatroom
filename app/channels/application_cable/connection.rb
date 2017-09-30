# Be sure to restart your server when you modify this file. Action Cable runs in a loop that does not support auto reloading.
module ApplicationCable
  class Connection < ActionCable::Connection::Base
    identified_by :current_user

    def connect
      self.current_user = find_verified_user # set current user so that its available for cable controllers
      logger.add_tags 'ActionCable', current_user.email # # is used to display debugging information in the console
    end

    protected

    def find_verified_user # this checks whether a user is authenticated with devise
      # Under the hood Devise uses Warden for authentication, so env['warden'].user tries to fetch the currently
      # logged-in user. If it is not found, reject_unauthorized_connection forbids broadcasting.
      
      if verified_user = env['warden'].user
        verified_user
      else
        reject_unauthorized_connection
      end
    end
  end
end
