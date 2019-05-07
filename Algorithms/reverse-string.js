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
