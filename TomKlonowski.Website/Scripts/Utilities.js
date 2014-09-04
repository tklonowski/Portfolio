var Util = {
    messageId: 1,

    init: function () {
    },

    addMessage: function (messageType, title, message, delay) {
        if (!title) {
            title = "Message";
        }

        if (!message) {
            message = "";
        }

        if (!delay && messageType == 'success') {
            delay = 5000;
        }

        $messageBox = $('.message-box');
        $message = $('<div class="message m' + messageType + '" id="msg' + Util.messageId + '"><div class="message-title left">' + title + '</div>' + '<input type="button" value="X" class="message-close right" id="msgClose-' + Util.messageId + '" />' + '<div class="message-body clear">' + message + '</div><div class="clear" /></div>');

        $messageBox.append($message);

        if (messageType != 'error' && delay) {
            setTimeout(function (messageId) {
                $('#msg' + messageId).fadeOut('slow');
            }, delay, Util.messageId);
        }

        $('#msgClose-' + Util.messageId).click(function () {
            var id = '#msg' + this.id.substring(this.id.indexOf('-') + 1)
            $(id).fadeOut('slow');
        });

        Util.messageId++;
   }
};