/**
 * @param {string} s
 * @return {boolean}
 */

const BracketMap = {
  ")": "(",
  "]": "[",
  "}": "{",
};

const isValid = function (s) {
  if (s === "" || s.length % 2 !== 0) {
    return false;
  }

  let stack = [];

  for (char of s) {
    if (["(", "[", "{"].includes(char)) {
      stack.push(char);
    } else {
      const preBracket = stack.pop();

      if (preBracket !== BracketMap[char]) {
        return false;
        break;
      }
    }
  }

  return stack.length == 0;
};

module.exports = isValid;
