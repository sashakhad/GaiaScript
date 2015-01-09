var changeWordTagsToSpan = function(tag, gaiaClass) {
	$(tag).each(function(index, element) {
    var $el = $(element);
    var words = $el.text().split(' ');
    var spans = words.map(function(word) {
    	var newSpan = $('<span>').text(word + ' ').addClass(gaiaClass);
    	return newSpan;
    });
    spans.join(' ');
    $el.html(spans);
  });
};

var shuffle = function(o){ //v1.0
    for(var j, x, i = o.length; i; j = Math.floor(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);
    return o;
};

var randHexColorGenerator = function() {
  var letters = '0123456789ABCDEF'.split('');
  var color = '#';
  for (var i = 0; i < 6; i++ ) {
      color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
};

var changeWordColor = function(span) {
	var newColor = randHexColorGenerator();
	$(span).css('color', newColor);
};

var changeWordColors = function() {
	var counter = 250;
	var shuffledSpans = shuffle($('span'));
	shuffledSpans.each(function(index, span) {
		setTimeout(function() {
			changeWordColor(span);
	}, counter);
		counter += 250;
	});
};

var randomElement = function(array){
  var randomIndex = Math.floor(Math.random() * array.length);
  return array[randomIndex];
};

var classes = ['gaia', 'spin', 'pulsate', 'left', 'right', 'orb'];

var toggleRandomClasses = function(){
  var counter = 100;
  var shuffledSpans = shuffle($('span'));
  shuffledSpans.each(function(index, span) {
    setInterval(function() {
      $(span).toggleClass('spin');
  }, counter);
    counter += 100;
  });
}();