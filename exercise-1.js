///////////////////////////////////////////////////////
///////////////////////////////////////////////////////
////    ______                _   _                ////
////    |  ___|              | | (_)               ////
////    | |_ _   _ _ __   ___| |_ _  ___  _ __     ////
////    |  _| | | | '_ \ / __| __| |/ _ \| '_ \    ////
////    | | | |_| | | | | (__| |_| | (_) | | | |   ////
////    \_|  \__,_|_| |_|\___|\__|_|\___/|_| |_|   ////
////                                               ////
////                                               ////
////    ______               _   _                 ////
////    | ___ \             | | (_)                ////
////    | |_/ / __ __ _  ___| |_ _  ___ ___        ////
////    |  __/ '__/ _` |/ __| __| |/ __/ _ \       ////
////    | |  | | | (_| | (__| |_| | (_|  __/       ////
////    \_|  |_|  \__,_|\___|\__|_|\___\___|       ////
////                                               ////
////                                               ////
///////////////////////////////////////////////////////
///////////////////////////////////////////////////////


// Q1
// Write a function called `sum` that takes two
// parameters and returns the sum of those 2 numbers.

function sum(a, b) {
    return a + b;
  };
  var firstAnswer = sum;

var answer1 = document.querySelector('#answer1');
    // Create a node from our above answer ready for the DOM
  var textNode = document.createTextNode(firstAnswer);
    // Append newly created node to our answer element
  answer1.appendChild(textNode);


// Q2
// Write a function named `avg` that takes 3 parameters
// and returns the average of those 3 numbers.

function avg(a,b,c) {
  return (a+b+c)%3;
};

var answer2 = document.querySelector('#answer2');
    // Create a node from our above answer ready for the DOM
  var textNode = document.createTextNode(avg);
    // Append newly created node to our answer element
  answer2.appendChild(textNode);


// Q3
// Write a function called `getLength` that takes one
// parameter (a string) and returns the length

function getLength(a) {
return a.length;
};
var answer3 = document.querySelector('#answer3');
    // Create a node from our above answer ready for the DOM
  var textNode = document.createTextNode(getLength);
    // Append newly created node to our answer element
  answer3.appendChild(textNode);
// Q4
// Write a function called `greaterThan` that takes
// two parameters and returns `true` if the second
// parameter is greater than the first. Otherwise
// the function should return `false`.

function greaterThan(a, b) {
   if(b > a) return true;
   else 
    return false;
};

var answer4 = document.querySelector('#answer4');
    // Create a node from our above answer ready for the DOM
  var textNode = document.createTextNode(greaterThan);
    // Append newly created node to our answer element
  answer4.appendChild(textNode);

// Q5
// Write a function called `greet` that takes a
// single parameter and returns a string that
// is formated like "Hello, Name!" where *Name*
// is the parameter that was passed in.

function greet(x) {
return "Hello, " + x;
};
var answer5 = document.querySelector('#answer5');
    // Create a node from our above answer ready for the DOM
  var textNode = document.createTextNode(greet);
    // Append newly created node to our answer element
  answer5.appendChild(textNode);

// Q6
// Write a function called `madlib` that takes
// 4 or more parameters (words). The function 
// should insert the words into a pre-defined
// sentence. Finally the function should return
// that sentence.
// Note: When I say words and sentence I mean
// strings. For example:
// words: "quick", "fox", "fence"
// sentence: "quick brown fox jumps over the fence"
function madlib(a,b,c,d) {
  return "I will be " + a + " when " + b + " comes to " + c + " the " + d;
};
var answer6 = document.querySelector('#answer6');
    // Create a node from our above answer ready for the DOM
  var textNode = document.createTextNode(madlib);
    // Append newly created node to our answer element
  answer6.appendChild(textNode);

///////////////////////////////////////////////////////
///////////////////////////////////////////////////////