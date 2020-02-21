/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
  const result = [];

  for (let i = 0; i < nums.length; i++) {
    let tResult = target - nums[i];
    let tIntex = nums.indexOf(tResult);
    if (tIntex !== -1 && tIntex !== i) {
      result.push(i);
      result.push(tIntex);
      break;
    }
  }

  return result;
};

module.exports = twoSum;

// [2, 7, 11, 15], target = 9,

// [-1,-2,-3,-4,-5]
// -8

// [-3,4,3,90]
// 0
