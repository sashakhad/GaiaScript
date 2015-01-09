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
  };

  setInterval( changeColors, 1000);
});
