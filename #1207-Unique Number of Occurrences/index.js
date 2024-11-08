/**
 * @param {number[]} arr
 * @return {boolean}
 */
var uniqueOccurrences = function (arr) {
  const occurrencesAmount = new Map();

  for (let i = 0; i < arr.length; i++) {
    const number = arr[i];
    const numberAmount = occurrencesAmount.get(number) ?? 0;

    occurrencesAmount.set(number, numberAmount + 1);
  }

  return new Set(occurrencesAmount.values()).size === occurrencesAmount.size;
};

module.exports = uniqueOccurrences;
