
jQuery(document).on('turbolinks:load', function(){
  messages = $('#messages');
  if (messages.length > 0){
    App.GlobalChat = App.Cable.subscriptions.create({
      channel: "ChatRoomsChannel",
      chatRoomId: messages.data('chat-room-id'),
      connected: function(){
        // # Called when the subscription is ready for use on the server
      },
      disconnected: function(){
        // # Called when the subscription has been terminated by the server
      },
      received: function(data){

      },
      sendMessage: function(message, chatRoomId){
        console.log(this)
        this.perform('sendMessage', { message: message, chat_room_id: chatRoomId }) //ruby convention
      }
    });


    // TODO:: Move this
    $('#new_message').submit(function(e){
      e.preventDefault();

      var $this = $(this)
      var textarea = $this.find('#message_body')

      if($.trim(textarea.val()).length > 1){
        App.GlobalChat.sendMessage(textarea.val(), messages.data('chat-room-id'));
        textarea.val('')
      }
      return false
    });
  }
});
