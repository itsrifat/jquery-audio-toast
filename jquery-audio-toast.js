/**
* Author: Moinul Hossain Rifat (moinul.hossain@csebuet.com)
* Date: 01/06/2014
* A jquery plugin to play adio message in webpage using google translate's api
* The plugin template reference: https://github.com/shichuan/javascript-patterns/blob/master/jquery-plugin-patterns/namespaced-starter.html
* Google tramslate has a restrington on string length which is 100, so this plugin can not play messages longer than 100 chars
*/
;
(function ($, window, document, undefined) {
    if (!$.toastMaker) {
        $.toastMaker = {};
    }
    $.toastMaker.enabled = true;
    $.toastMaker.maxLength = 100;

    $.toastMaker.cache = {};
    $.toastMaker.makeToast = function (textToSay, options) {
        init = function () {
            options = $.extend({}, $.toastMaker.makeToast.defaults, options);
            var url = makeUrl(textToSay, options.lang);
            var cacheKey = generateHash(textToSay);
            if ($.toastMaker.enabled && textToSay.length <= $.toastMaker.maxLength) {
                playToast(url);
            }
        };
        makeUrl = function (text, lang) {
            var uri = "tl=" + options.lang + "&" + "q=" + encodeURI(text);
            return options.baseUrl + uri;
        };
        playToast = function (url) {
            var cacheKey = generateHash(textToSay);
            var audio;
            if ($.toastMaker.cache[cacheKey] != undefined) {
                audio = $.toastMaker.cache[cacheKey];
            }
            else {
                audio = new Audio();
                $(audio).prop("src", url);
                $(audio).prop("type", 'audio/mp3');
                audio.load();
                $.toastMaker.cache[cacheKey] = audio;
            }
            audio.play();
            audio.addEventListener('ended', function (e) {
                if (typeof options.done == 'function') {
                    options.done();
                }
            });
        }
        //http://stackoverflow.com/questions/7616461/generate-a-hash-from-string-in-javascript-jquery
        generateHash = function (str) {
            var hash = 0, i, char;
            if (str.length == 0) return hash;
            for (i = 0, l = str.length; i < l; i++) {
                char = str.charCodeAt(i);
                hash = ((hash << 5) - hash) + char;
                hash |= 0;
            }
            return hash.toString();
            ;
        };
        init();
    };

    $.toastMaker.makeToast.defaults = {
        baseUrl:'http://translate.google.com/translate_tts?',
        enabled:true,
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