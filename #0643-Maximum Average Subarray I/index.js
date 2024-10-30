/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findMaxAverage = function (nums, k) {
  let leftIndex = 0;
  let rightIndex = k;
  let result = 0;
  let sum = 0;

  // summary first group total
  for (let i = 0; i < k; i++) {
    sum += nums[i];
  }
  result = sum;

  // summary all groups total
  while (rightIndex != nums.length) {
    sum = sum - nums[leftIndex] + nums[rightIndex];
    if (sum > result) {
      result = sum;
    }
    leftIndex++;
    rightIndex++;
  }

  return result / k;
};

module.exports = findMaxAverage;
