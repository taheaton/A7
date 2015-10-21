// ---------------------------
// The Arrays You Will Work With
// ---------------------------
var numbers = [1,12,4,18,9,7,11,3,101,5,6];
var strings = ['this','is','a','collection','of','words'];
var instructors = [
    { firstname : 'JD', teaches : 'JavaScript'},
    { firstname : 'Tim', teaches : 'JavaScript'},
    { firstname : 'Brit', teaches : 'Ruby'},
    { firstname : 'Joe', teaches : 'iOS'},
    { firstname : 'Jake', teaches : 'JavaScript'},
    { firstname : 'Will', teaches : 'JavaScript'},
    { firstname : 'Calvin', teaches : 'JavaScript'},
    { firstname : 'James', teaches : 'Ruby'}
];



// ---------------------------
// 1. Find largest number
// ---------------------------
function largest (a,b) {
  
  var numbers = [1,12,4,18,9,7,11,3,101,5,6];
  var inOrder = numbers.sort(function(a, b){
  return a-b;
});
  var objects = numbers.length;
  var last = inOrder[objects-1];
};


var numbers = [1,12,4,18,9,7,11,3,101,5,6];
undefined
var numbersInOrder = numbers.sort(function(a, b) {
  return a - b;
});
console.log(numbers);
VM10048:5 [1, 3, 4, 5, 6, 7, 9, 11, 12, 18, 101]
undefined
numbersInOrder
[1, 3, 4, 5, 6, 7, 9, 11, 12, 18, 101]

// [1, 2, 3, 4, 5]
var large = numbersInOrder[numbersInOrder.length - 1];
undefined
large
101

// ---------------------------
// 2. Find longest string
// ---------------------------
var strings = ['this','is','a','collection','of','words'];
strings
["this", "is", "a", "collection", "of", "words"]
strings.sort(function(a, b){
  return b.length - a.length;
});
["collection", "words", "this", "is", "of", "a"]
strings [0]
"collection"

// ---------------------------
// 3. Find even numbers
// ---------------------------
var numbers = [1,12,4,18,9,7,11,3,101,5,6];

[1, 101, 11, 12, 18, 3, 4, 5, 6, 7, 9]

function even(a){
  return a.filter(function(val){return val%2===0})
}

even(arr);
[4, 8, 14, 76] - not correct

// ---------------------------
// 4. Find odd numbers
// ---------------------------


// ---------------------------
// 5. Find words that contain `is`
// ---------------------------



// ---------------------------
// 5. Join Both Arrays Together
// ---------------------------




// ---------------------------
// 6. Use the Instructors array and find all that teach JavaScript, 
//    then sort them alphabetically
// ---------------------------