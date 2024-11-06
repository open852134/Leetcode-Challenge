/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var maxVowels = function (s, k) {
  const vowel = new Set(["a", "e", "i", "o", "u"]);

  let result = 0;
  let currentVowelAmount = 0;

  for (let i = 0; i < k; i++) {
    if (vowel.has(s[i])) {
      currentVowelAmount += 1;
    }
  }
  result = currentVowelAmount;

  for (let j = k; j < s.length; j++) {
    if (vowel.has(s[j - k])) {
      currentVowelAmount -= 1;
    }

    if (vowel.has(s[j])) {
      currentVowelAmount += 1;
    }

    result = Math.max(result, currentVowelAmount);
  }

  return result;
};

module.exports = maxVowels;
