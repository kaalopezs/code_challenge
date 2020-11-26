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
  let back = '';
  str = str.toLowerCase();
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

const largestPair = function(array) {
 let initialProduct = array[0] * array[1];
 for(i = 0; i < array.length; i++){
  let currentProduct = array[i] * array[i + 1];
  if(currentProduct > initialProduct){
   initialProduct = currentProduct;
  };
 };
 return initialProduct;
};

const removeParenth = function(str) {
  const noParenth = str.replace(/\(.*\)/, '');
  return noParenth;
};

const scoreScrabble = function(str) {
let score = 0;
  for (i = 0; i < str.length; i++){
    if(str[i] === 'a' || str[i] === 'e' || str[i] === 'i' ||str[i] === 'o' ||str[i] === 'u' ||str[i] === 'l' ||str[i] === 'n' ||str[i] === 'r' ||str[i] === 's' ||str[i] === 't'){
      score++;
    };
    if(str[i] === 'd' ||str[i] === 'g'){
      score += 2;
    };
    if(str[i] === 'b' ||str[i] === 'c' ||str[i] === 'm' ||str[i] === 'p'){
      score +=3;
    };
    if(str[i] === 'f' ||str[i] === 'h' ||str[i] === 'v' ||str[i] === 'w' ||str[i] === 'y'){
      score += 4;
    };
    if(str[i] === 'k'){
      score += 5;
    };
    if(str[i] === 'j' ||str[i] === 'x'){
      score += 8;
    };
    if(str[i] === 'z' ||str[i] === 'q'){
      score +=10;
    };
  };
  return score;
};
