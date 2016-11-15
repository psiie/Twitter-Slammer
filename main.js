var ligatures = {
  "about": "~",
  "because": "b/c",
  "thanks": "THX",
  "great": "GR8",
  "later": "L8R",
  "wait": "W8",
  "your": "UR",
  "today": "2day",
  "tonight": "2nite",
  "night": "nite",
  "light": "lite",
  "for": "4",
  "address": "ADR",
  "before": "B4",
  "see": "C",
  "date": "D8",
  "definitely": "def",
  "easy": "EZ",
  "hate": "H8",
  "please": "plz",
  "computer": "PC",
  "are": "r",
  "sorry": "sry",
  "seriously": "srsly",
  "sucks": "sux",
  "text": "TXT",
  "twitter": "TWTR",
  "yours": "urs",
  "you": "u",
  "without": "w/o",
  "aa" :"ꜳ",
  "ae" :"æ",
  "av" :"ꜹ",
  "oe" :"œ",
  "ue" :"ᵫ",
  "ffl" :"ﬄ",
  "ffi" :"ﬃ",
  "ff" :"ﬀ",
  "fl" :"ﬂ",
  "fi" :"ﬁ",
  "oo" :"ꝏ",
  "ft" :"ﬅ",
  "st" :"ﬆ",
  "db" :"ȸ",
  "dz" :"ʣ",
  "ij" :"ĳ",
  "ls" :"ʪ",
  "lz" :"ʫ",
  "qp" :"ȹ",
  "ts" :"ʦ",
  "tf" :"ʧ",
  "lj" :"ǉ",
  "ll" :"ǁ",
  "nj" :"ǌ",
  "th" :"ᵺ",
  "hu" :"ƕ",
};

var specialLigatures = {
  "'n" :"ŉ",
  "?!" :"‽",
  "!?" :"‽"
}

try {
  var box2 = document.getElementById('tweet-box-global').children[0];
  var box1 = document.getElementById('tweet-box-home-timeline').children[0];
  var elem = box1;
} catch(e){}

// Switch boxes from home-timeline to global
if (!box1 || box1.innerText == "What’s happening?" || box1.length <= 1 ) {elem = box2;}


// Add the function OFC
var slammer = function(element) {
  var curr = element.innerText;
  var result = '';

  // Go through each word first
  curr.split(' ').forEach(function(item, idx) {
    var modItem = item.replace(/.+/, function(match) {
      for (var key in specialLigatures) {match = match.replace(key, specialLigatures[key]);}
      return match;
    });
    result += modItem.replace(/(\w+)(\W+)?/i, function(match, p1, p2) {
      for (var key in ligatures) {p1 = p1.toLowerCase().replace(key, ligatures[key]);}
      return p2? p1 + p2: p1;
    });
    result += ' ';
  });

  // Then go through the whole tweet and free space through punctuation
  result = result.replace(/with\s/, 'w/'); // with me => w/me
  result = result.replace(/([,.?;:!])\s/g, '$1'); // Free space after punc.
  result = result.replace(/(?:'(\w))|(?:(\w)'\s)/g, '$1'); // remove ' in words
  result = result.replace(/(\w\.)(\w)/, function(m,p1,p2) {return p1 + p2.toUpperCase();}); // Uppercase new sentance
  result = result.replace(/^\w/, function(m) {return m.toUpperCase();}); // Cap first letter

  element.innerText = result;
}

// execute
slammer(elem);

// human + hv = ?! lists craft florida avenue yet ai'nt llama moot 13ft them.