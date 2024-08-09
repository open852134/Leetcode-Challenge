/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
  if (!s.trim()) return true;

  s = s.trim().replace(/[\W_]/g, "").toLowerCase();

  if (s == s.split("").reverse().join("")) {
    return true;
  } else {
    return false;
  }
};

module.exports = isPalindrome;
