var Util = {
    init: function () {
    },

    addMessage: function (messageType, title, message, delay) {
        if (!title) {
            title = "Message";
        }

        if (!message) {
            message = "";
        }

        if (!delay) {
            delay = 5000;
        }

        $messageBox = $('.message-box');
        $message = $('<div class="message m' + messageType + '"><div class="message-title">' + title + '</div><div class="message-body">' + message + '</div></div>');

        $messageBox.append($message);
        $message.delay(delay).fadeOut('slow');
   }
};