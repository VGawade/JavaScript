// By using for loop

function reverseStrLoop(str) {
  let newStr = '';
  for (let i = str.length - 1; i >= 0; i--) {
    newStr += str[i];
  }
  return newStr;
}

reverseStrLoop('reverse');

// By using recursion
function reverseStrRecursion(str) {
  return str === '' ? '' : reverseStrRecursion(str.substr(1)) + str.charAt(0);
}

reverseStrRecursion('reverse');

// Reverse words in string without changing their position
function reverseWords(str) {
  var newStr = '';
  var index = 0;
  for (let i = 0; i < str.length; i++) {
    if (str.charAt(i) === ' ' || i === str.length) {
      var wordLength = str.charAt(i) === ' ' ? i : str.length;
      var word = str.slice(index, wordLength);
      index = i;
      var j = word.length - 1;
      while (j >= 0) {
        newStr += word[j];
        j--;
      }
      newStr += ' ';
    }
  }
  return newStr;
}

reverseWords('Hello world this is vijay');
