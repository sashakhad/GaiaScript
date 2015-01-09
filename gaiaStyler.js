var classes = ['gaia', 'spin', 'pulsate', 'left', 'right', 'orb'];

var randomClass = function(array){
  var randomIndex = Math.floor(Math.random() * array.length);
  return array[randomIndex];
};
