!function(n){console.log("shuffling"),n.fn.shuffle=function(f){return f=[],this.each(function(){f.push(n(this).clone(!0))}).each(function(e,h){n(h).replaceWith(f[e=Math.floor(Math.random()*f.length)]),f.splice(e,1)})},n.shuffle=function(f){return n(f).shuffle()}}(jQuery);