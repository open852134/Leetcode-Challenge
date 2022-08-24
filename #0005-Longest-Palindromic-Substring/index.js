/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function (s) {
  let result = "";

  if (s.length <= 1) {
    return s;
  }

  for (let i = 0; i < s.length; i++) {
    for (let j = i + 1; j <= s.length; j++) {
      const string = s.slice(i, j);

      if (string === string.split("").reverse().join("") && string.length > result.length) {
        result = string;
      }

      console.log("string", s[i], string);
    }
  }

  return result;
};

module.exports = longestPalindrome;
