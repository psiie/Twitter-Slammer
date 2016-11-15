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
  "AA": "Ꜳ",
  "AE": "Æ",
  "AV": "Ꜹ",
  "CE": "Œ",
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
  "lj" :"ǉ",
  // "ll" :"ỻ",
  "ll" :"ǁ",
  "nj" :"ǌ",
  "th" :"ᵺ",
  "'n" :"ŉ",
  "hu" :"ƕ",
  "hv" :"ƕ",
  "?!" :"‽",
  "!?" :"‽"
};


// Create and add button
var btnHTML = document.createElement("div");
btnHTML.innerHTML = "Slam It!";
btnHTML.setAttribute('class', 'btn primary-btn slammer');
document.getElementsByClassName('TweetBoxExtras tweet-box-extras')[1]
        .appendChild(btnHTML);

// Add event listener
document.getElementsByClassName('slammer')[0].addEventListener('click', function(e) {
  slammer();
})

// Add the function OFC
var slammer = function() {
  var curr = document.getElementById('tweet-box-global').children[0].innerText;
  var result = '';

  // Go through each word first
  curr.split(' ').forEach(function(item, idx) {
    result += item.replace(/(\w+)(\W+)?/i, function(match, p1, p2) {
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

  document.getElementById('tweet-box-global').children[0].innerText = result;
}


// // document.addEventListener("DOMContentLoaded", function() {
// setTimeout(function() {
//   // Add the button to the Tweet Popup
//   var btnHTML = `<div id="slammer" class="btn primary-btn">Slam It</div>`;
//   $('.TweetBoxExtras.tweet-box-extras').append(btnHTML);

//   // Add event listener for the button we created
//   $('#slammer').click(slammer);

// // });

//   function slammer() {
//     var curr = $('#tweet-box-global')[0].children[0].innerText;
//     var result = '';

//     // Go through each word first
//     curr.split(' ').forEach(function(item, idx) {
//       result += item.replace(/(\w+)(\W+)?/i, function(match, p1, p2) {
//         for (var key in ligatures) {p1 = p1.toLowerCase().replace(key, ligatures[key]);}
//         return p2? p1 + p2: p1;
//       });
//       result += ' ';
//     });

//     // Then go through the whole tweet and free space through punctuation
//     result = result.replace(/with\s/, 'w/'); // with me => w/me
//     result = result.replace(/([,.?;:!])\s/g, '$1'); // Free space after punc.
//     result = result.replace(/(?:'(\w))|(?:(\w)'\s)/g, '$1'); // remove ' in words
//     result = result.replace(/(\w\.)(\w)/, function(m,p1,p2) {return p1 + p2.toUpperCase();}); // Uppercase new sentance
//     result = result.replace(/^\w/, function(m) {return m.toUpperCase();}); // Cap first letter

//     $('#tweet-box-global')[0].children[0].innerText = result;
//   }



// }, 5000);





