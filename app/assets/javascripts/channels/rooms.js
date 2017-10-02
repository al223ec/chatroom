
jQuery(document).on('turbolinks:load', function(){
  var messages, scrollToBottom;
  scrollToBottom = function(){
    $('html, body').animate({
      scrollTop: $(document).height()-$(window).height()},
      400,
      "linear"
    );
  }

  messages = $('#messages');
  if (messages.length > 0){
    scrollToBottom();

    App.GlobalChat = App.Cable.subscriptions.create({
        channel: "ChatRoomsChannel",
        chat_room_id: messages.data('chat-room-id') // ruby convention
      },{
        connected: function() {},
        disconnected: function() {},
        received: function(data) {
          messages.append(data['message']);
          scrollToBottom();
        },
        sendMessage: function(message, chatRoomId) {
          // ruby convention
          return this.perform('send_message', {
            message: message,
            chat_room_id: chatRoomId
          });
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
