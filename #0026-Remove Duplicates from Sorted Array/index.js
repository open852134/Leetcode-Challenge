/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
  if (nums.length < 2) return nums.length;
  let rIndex = 1;

  for (let i = 0; i < nums.length - 1; i++) {
    if (nums[i] !== nums[i + 1]) {
      nums[rIndex] = nums[i + 1];
      rIndex++;
    }
  }
  return rIndex;
};

module.exports = removeDuplicates;
