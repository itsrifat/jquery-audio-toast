jquery-audio-toast
------------------

A simple jqury plugin to play audio toast messages in web page. It uses Google Translates's internal API(used in translate.google.com, which is publicly available) to convert the text into specch (I'm not sure if it's legal to use, I didn't find any TOS doc by googling). This API suports string of length upto 100 char. So message longer than 100 charecter won't play. See [jquery-audio-toast.html](jquery-audio-toast.html) for demo

How to use
----------

```javascript
  //To play a toast with default settings
  $.audioToast('Hey Mr Tambourine man play a song for me');
  
  //to play a toast with different language other than english
  $.audioToast('Je parle en frech',{
    lang:'fr'
  });
  
  //to add a callback to be called after the toast is played
  $.audioToast('Je parle en frech',{
    lang:'fr',
    done: function () {
      console.log('Done Playing');
    }
  });
  
  //to enable/disable globally in the webpage
  $.audioToast.setEnabled(!$.audioToast.getEnabled());
  
  // Function to e called if toasting is disabled in webpage
  $.audioToast.ifDisable = function () {
    console.log('Audio Tosting is Disabled in this web page');
  };
  
  
```
