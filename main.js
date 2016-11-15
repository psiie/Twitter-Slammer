var ligatures = {
  "about": "~",
  "because": "B/C",
  "thanks": "THX",
  "great": "GR8",
  "later": "L8R",
  "wait": "W8",
  "your": "UR",
  "cutie": "QT",
  "today": "2DAY",
  "tonight": "2nite",
  "night": "nite",
  "light": "lite",
  "for": "4",
  "address": "ADR",
  "before": "B4",
  "toilet": "WC",
  "bathroom": "WC",
  "see": "C",
  "date": "D8",
  "definitely": "DEF",
  "doing": "doin",
  "easy": "EZ",
  "favourite": "FAV",
  "favorite": "FAV",
  "forward": "FWD",
  "hate": "H8",
  "jelious": "JELLY",
  "okay ok": "K",
  "later": "L8R",
  "minutes": "MINS",
  "enough": "NUFF",
  "pizza": "'ZA",
  "please": "PLZ",
  "computer windows": "PC",
  "windows": "PC",
  "password": "PW",
  "are": "r",
  "sorry": "sry",
  "seriously": "srsly",
  "straight": "STR8",
  "sucks": "sux",
  "text": "TXT",
  "twitter": "TWTR",
  "you": "u",
  "yours": "urs",
  "without": "w/o",
  "wait": "W8",
  "at": "@",
  "aa" :"ꜳ",
  "ae" :"æ",
  "av" :"ꜹ",
  "oe" :"œ",
  "ue" :"ᵫ",
  "ff" :"ﬀ",
  "fl" :"ﬂ",
  "fi" :"ﬁ",
  "ffi" :"ﬃ",
  "ffl" :"ﬄ",
  "oo" :"ꝏ",
  "ft" :"ﬅ",
  "fs" :"ß",
  "fz" :"ß",
  "et" :"&",
  "st" :"ﬆ",
  "db" :"ȸ",
  "dz" :"ʣ",
  "ij" :"ĳ",
  "ls" :"ʪ",
  "lz" :"ʫ",
  "qp" :"ȹ",
  "ts" :"ʦ",
  "tf" :"ʧ",
  // "ll" :"ỻ",
  "ll" :"ǁ",
  "th" :"ᵺ",
  "'n" :"ŉ",
  "?!" :"‽",
  "!?" :"‽"
};

var curr = $('#tweet-box-global')[0].children[0].innerText
// var curr = "finally the aether, which is with me in florida, floods at last for you. Text your passwords later because it's great";
var result = '';

// Go through each word first
curr.split(' ').forEach(function(item, idx) {
  result += ' ' + item.replace(/(\w+)(\W+)?/i, function(match, p1, p2) {
    for (var key in ligatures) {p1 = p1.replace(key, ligatures[key]);}
    return p2? p1 + p2: p1;
  })
});

// Then go through the whole tweet and free space through punctuation
result = result.replace(/with\s/, 'w/') // with me => w/me
result = result.replace(/([,.?;:!])\s/g, '$1'); // Free space after punc.
result = result.replace(/(?:'(\w))|(?:(\w)'\s)/g, '$1'); // remove ' in words

