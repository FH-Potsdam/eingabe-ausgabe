// taken from here
// http://stackoverflow.com/questions/15438238/shuffle-some-divs-using-jquery
//
(function(d) {
    console.log("shuffling");
  d.fn.shuffle = function(c) {
    c = [];
    return this.each(function() {
      c.push(d(this).clone(true));
    }).each(function(a, b) {
      d(b).replaceWith(c[a = Math.floor(Math.random() * c.length)]);
      c.splice(a, 1);
    });
  };
  d.shuffle = function(a) {
    return d(a).shuffle();
  };
})(jQuery);