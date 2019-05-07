// Palindrome
function palindrome(str) {
  let regEx = /[\W_]/g; // To remove space from string
  let lowerCaseStr = str.toLowerCase().replace(regEx, '');
  let reversedStr = lowerCaseStr
    .split('')
    .reverse()
    .join('');
  return lowerCaseStr === reversedStr;
}

palindrome('A man, a plan, a canal. Panama');
