class MessageBroadcastJob < ApplicationJob
  queue_as :default

  ### called from callback in message model
  def perform(message)
    # Does the actual broadcasting, but what about the data we want to broadcast? Once again, there are a
    # couple of ways to solve this problem. You may send JSON with the message data and then on the client
    # side use a templating engine, use html for now and use rails template engine
    ActionCable.server.broadcast "chat_rooms_#{message.chat_room_id}_channel", message: render_message(message)
  end

  private
    def render_message(message)
      MessagesController.render partial: 'messages/message', locals: { message: message }
    end
end
