var Util = {
    init: function () {
    },

    addMessage: function (messageType, title, message) {
        if (!title) {
            title = "Message";
        }

        if (!message) {
            message = "";
        }

        $messageBox = $('.message-box');
        $message = $('<div class="message-' + messageType + '"><div class="message-title">' + title + '</div><div class="message-body">' + message + '</div></div>');

        $messageBox.append($message);
        $message.delay(5000).fadeOut('slow');
   }
};