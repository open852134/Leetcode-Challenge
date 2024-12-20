/**
 * @param {number[]} gain
 * @return {number}
 */
var largestAltitude = function (gain) {
  let result = 0;
  let lastSum = 0;

  for (let i = 0; i < gain.length; i++) {
    lastSum += gain[i];
    result = Math.max(lastSum, result);
  }

  return result;
};

module.exports = largestAltitude;
