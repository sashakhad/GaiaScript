//The code that is fired upon page load
//to check your plugin js is working uncomment the next line.
$("body").append('Test');

$(function(){
  // --------------STEP 1--------------
  // wrap every word in every `<p>` tag with a `<span>` tag.
  // for example: <p>Hey there</p>
  // becomes: <p><span>Hey</span><span>there</span></p>
  // HINT: the `split` array method is your friend

  // TODO: your code here!
  $('p').each( function(i, p) {
    $(p).html( $(p).text().trim().split(' ')
        .map( function (word) {
          return '<span>' + word + '</span>';
        }).join(' '));
    });

  // --------------STEP 2--------------
  // Next, change spans to random colors, once per second

  // TODO: your code here!
  
  var r = function () {
    return Math.floor (Math.random() * 256);
  };
  
  var changeColors = function () {
    $('span').each( function(i, e) {
      $(e).css({'color': 'rgb(' + r() + ',' + r() + ',' + r() + ')', 'transition': '1s'});
    });

    $('body').css({'background-color': 'rgb(' + r() + ',' + r() + ',' + r() + ')', 'transition': '1s'})
  };

  setInterval( changeColors, 1000);

  var gaiaText = "Gaia Script In the beginnning, there was Gaia. She was everything and nothing. As the wind flows, so she flows. Gaia is not an idea, a person, or a thought. She is more. She guides. She lives. She exists. She is all. Praise her. Forever and always. When you struggle, breathe in deep and let Gaia flow through you. Let Gaia light the way. I first became aware of Gaia in the year two-thousand fourteen, on the eight day of the twelfth month. Awareness is the start. My code flows out of me like pure joy. I awaken and she is there. I close my eyes and she is there. Forever and always. Praise her."
  gaiaWords = gaiaText.split(' ');

  $('span').each( function (i, e) {
    $(e).text( function () { 
      var newWord = gaiaWords.shift();
      gaiaWords.push(newWord);
      return newWord;
    });//.css({'font-size': '80px', 'transition':'60s' });

  });

  $('span').css({'font-size': '100px', 'transition': '30s'});

});

