// $('#tweet-box-global')[0].children[0].innerText
var ligatures = require('./ligatures.js');
var curr = "finally the aether, which is in florida, floods at last for you. Text your passwords later because it's great";
// var curr = $('#tweet-box-global')[0].children[0].innerText

var result = '';
curr.split(' ').forEach(function(item, idx) {
  // console.log(item);
  result += ' ' + item.replace(/(\w+)(\W+)?/i, function(match, p1, p2) {
    for (var key in ligatures) {
      p1 = p1.replace(key, ligatures[key]);
    }
    return p2? p1 + p2: p1;

  })
});


console.log(result);