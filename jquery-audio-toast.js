;
(function ($, window, document, undefined) {
    if (!$.toastMaker) {
        $.toastMaker = {};
    }
    $.toastMaker.enabled = true;

    $.toastMaker.makeToast = function (textToSay, options) {
        init = function () {
            options = $.extend({}, $.toastMaker.makeToast.defaults, options);
            //to be updated
        };
        init();
    };

    $.toastMaker.makeToast.defaults = {
        baseUrl:'http://translate.google.com/translate_tts?',
        lang:'en'
    };

    $.audioToast = function (textToSay, options) {
        return new $.toastMaker.makeToast(textToSay, options);
    };

    $.audioToast.setEnabled = function (enabled) {
        $.toastMaker.enabled = enabled;
    };
    $.audioToast.getEnabled = function () {
        return $.toastMaker.enabled;
    };

})(jQuery, window, document);