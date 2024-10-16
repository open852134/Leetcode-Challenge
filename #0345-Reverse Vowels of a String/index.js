/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function (s) {
  const vowelsLists = new Set(["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"]);

  let result = new Array(s.length);
  let vowels = [];

  for (let i = 0; i < s.length; i++) {
    const currentChar = s[i];
    if (vowelsLists.has(currentChar)) {
      vowels.push(currentChar);
    } else {
      result[i] = currentChar;
    }
  }

  for (let j = 0; j < result.length; j++) {
    if (result[j] === undefined) {
      result[j] = vowels.pop();
    }
  }

  return result.join("");
};

module.exports = reverseVowels;
