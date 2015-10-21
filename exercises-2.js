// ---------------------
// Define a function max() that takes two numbers as arguments and returns the largest of them. Use the if-then-else construct available in JavaScript.
// ---------------------
function max (n, p) {
  var n = 3;
var p = 4;
  if (n > p)
    return n
  else
    return p;
};
var a1 = document.querySelector('#a1');
    // Create a node from our above answer ready for the DOM
  var textNode = document.createTextNode(max);
    // Append newly created node to our answer element
  a1.appendChild(textNode);
// ---------------------
// Define a function maxOfThree() that takes three numbers as arguments and returns the largest of them.
// ---------------------
function maxOfThree (x, y, z) {
  var x=3.2;
  var y=2.1;
  var z=5.4;
  if ((x > y) && (x > z))
return x;
else
if ((y>x) && (y > z))
return y;
else
return z;
};

// ---------------------
// Write a function that takes a character (i.e. a string of length 1) and returns true if it is a vowel, false otherwise.
// ---------------------
function isVowel (char) {
  var char = 'a';
  if ((char==='a') || (char==='e') || (char==='i') || (char==='o') || (char==='u'))
return true;
else
return false;    
};




// ---------------------
// Write a function translate() that will translate a text into "rÃ¶varsprÃ¥ket". That is, double every consonant and place an occurrence of "o" in between. For example, translate("this is fun") should return the string "tothohisos isos fofunon".
// ---------------------

function rovarspraket (phrase) {

  var chars = phrase.split('');
  var finalPhrase = [];

  chars.forEach( function (char) {
    if (!isVowel(char) && char !== ' ') {
      finalPhrase.push(char + 'o' + char);
    } else {
      finalPhrase.push(char);
    }
  });

  return finalPhrase.join('');

}

rovarspraket('the dog barks');





// ---------------------
// Define a function reverse() that computes the reversal of a string. For example, reverse("jag testar") should return the string "ratset gaj".
// ---------------------

function reverse(string){
     return string.split('').reverse().join('');
   };

   var string = "How are you?";


// ---------------------
// Write a function findLongestWord() that takes an array of words and returns the length of the longest one.
// ---------------------
function findLongestWord () {
var arr = ['am', 'but', 'catch', 'data', 'emu'];
var longest = arr.sort(function (a, b) { 
  return b.length - a.length; 
  })[0];
};

// ---------------------
// Write a function filterLongWords() that takes an array of words and an integer i and returns the array of words that are longer than i.
// ---------------------
function filterLongWords() {
var arr = ['am', 'but', 'catch', 'data', 'emu'];
var i = 4;
var larr = arr.filter(function (a,b) {
  if (a.length >= i)
    return a;
});
};

// ---------------------
// Write a function charFreq() that takes a string and builds a frequency listing of the characters contained in it. Represent the frequency listing as a Javascript object. Try it with something like charFreq("abbabcbdbabdbdbabababcbcbab").
// ---------------------
function charFreq() {
var string = "abbabcbdbabdbdbabababcbcbab";
var split = string.split('');
var lettera = split.filter(function (a,b) {
  if (a === 'a')
    return a;
});
var letterb = split.filter(function (a,b) {
  if (a === 'b')
    return a;
});
var letterc = split.filter(function (a,b) {
  if (a === 'c')
    return a;
});
var answer = "The letter a occurs " + lettera.length + " times.  The letter b occurs " + letterb.length + " times.  The letter c occurs " + letterc.length + " times.";
    };//...

    var a2 = document.querySelector('#a2');
    // Create a node from our above answer ready for the DOM
  var textNode = document.createTextNode(maxOfThree);
    // Append newly created node to our answer element
  a2.appendChild(textNode);

  var a3 = document.querySelector('#a3');
    // Create a node from our above answer ready for the DOM
  var textNode = document.createTextNode(isVowel);
    // Append newly created node to our answer element
  a3.appendChild(textNode);

  var a4 = document.querySelector('#a4');
    // Create a node from our above answer ready for the DOM
  var textNode = document.createTextNode(rovarspraket);
    // Append newly created node to our answer element
  a4.appendChild(textNode);

  var a5 = document.querySelector('#a5');
    // Create a node from our above answer ready for the DOM
  var textNode = document.createTextNode(reverse);
    // Append newly created node to our answer element
  a5.appendChild(textNode);

  var a6 = document.querySelector('#a6');
    // Create a node from our above answer ready for the DOM
  var textNode = document.createTextNode(findLongestWord);
    // Append newly created node to our answer element
  a6.appendChild(textNode);

  var a7 = document.querySelector('#a7');
    // Create a node from our above answer ready for the DOM
  var textNode = document.createTextNode(filterLongWords);
    // Append newly created node to our answer element
  a7.appendChild(textNode);

  var a8 = document.querySelector('#a8');
    // Create a node from our above answer ready for the DOM
  var textNode = document.createTextNode(charFreq);
    // Append newly created node to our answer element
  a8.appendChild(textNode);
