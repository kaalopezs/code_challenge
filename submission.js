//Takes an array of integers and returns the sum
const findSum = function(array) {
var total = 0;
for (var i = 0; i < array.length; i++){
 total += array[i];
}
return total;
};

//Returns the most and least frequent items in the array
 const findFrequency = function(array) {
  let counter = 0;
  let mf = 1;
  let lf = array.length;
  let mostFrequent;
  let leastFrequent;
  for(i = 0; i < array.length; i++){
    for(j = 0; j < array.length; j++)
    if(array[i] === array[j])
      counter++;
    if(mf < counter){
      mf = counter;
      mostFrequent = array[i];
    }
    if(lf > counter){
      lf = counter;
      leastFrequent = array[i];
    }
    counter = 0;
  }
  return {
    'most' : mostFrequent,
    'least': leastFrequent
  };
};

const isPalindrome = function(str) {
  const isPalindrome = function(str) {
  let back = '';
  let word = str.split('');
  for(i = (word.length - 1); i > -1; i--){
    back += word[i];
  }
  if(back === str){
    return true;
  }
  else{
    return false;
  }
};
};

const largestPair = function(array) {
  // your code here - don't forget to return a number!
};

const removeParenth = function(str) {
  // your code here - don't forget to return a string!
};

const scoreScrabble = function(str) {
  // your code here - don't forget to return a number!
};
