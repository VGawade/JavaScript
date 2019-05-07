function balancedParantheses(str) {
  var parentheses = '[]{}()',
    stack = [],
    i,
    character,
    bracePosition;

  for (i = 0; i < str.length; i++) {
    character = str[i];
    bracePosition = parentheses.indexOf(character);
    // Get characters odd, even position
    if (bracePosition === -1) {
      continue;
    }

    if (bracePosition % 2 === 0) {
      stack.push(bracePosition + 1);
    } else {
      if (stack.length === 0 || stack.pop() !== bracePosition) {
        return false;
      }
    }
  }

  return stack.length === 0;
}

balancedParantheses('{}[]');
