/**
 * @param {string} word1
 * @param {string} word2
 * @return {boolean}
 */
var closeStrings = function (word1, word2) {
  // Has same length as word1 and word2
  if (word1.length != word2.length) {
    return false;
  }

  // Has same character in word1 and word2
  const setWord1 = new Set(word1.split(""));
  const setWord2 = new Set(word2.split(""));

  if (setWord1.size !== setWord2.size) {
    return false;
  }

  for (let elem of setWord1) {
    if (!setWord2.has(elem)) {
      return false;
    }
  }

  // Each character in word1 and word2 has the same length structure.
  const mapWord1 = new Map();
  const mapWord2 = new Map();

  for (let i = 0; i < word1.length; i++) {
    mapWord1.set(word1[i], (mapWord1.get(word1[i]) ?? 0) + 1);
    mapWord2.set(word2[i], (mapWord2.get(word2[i]) ?? 0) + 1);
  }

  const word1Amount = Array.from(mapWord1.values()).sort((a, b) => a - b);
  const word2Amount = Array.from(mapWord2.values()).sort((a, b) => a - b);

  return word1Amount.every((val, index) => val === word2Amount[index]);
};

module.exports = closeStrings;
