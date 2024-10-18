/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function (nums) {
  // for (let i = 0; i < nums.length - 1; i++) {
  //   const currentElement = nums[i];
  //   let nextElementIndex = i + 1;

  //   if (nextElementIndex === nums.length) {
  //     return;
  //   }

  //   while (nums[nextElementIndex] === 0 && nextElementIndex < nums.length - 1) {
  //     nextElementIndex++;
  //   }

  //   if (currentElement === 0 && nums[nextElementIndex] !== 0) {
  //     let switchElement = nums[nextElementIndex];
  //     nums[nextElementIndex] = currentElement;
  //     nums[i] = switchElement;
  //   }
  // }

  // return nums;

  let left = 0;
  for (let right = 0; right < nums.length; right++) {
    console.log({
      right: right,
      left: left,
      "nums[right]": nums[right],
      "nums[left]": nums[left],
    });

    if (nums[right] != 0) {
      [nums[right], nums[left]] = [nums[left], nums[right]];
      left++;
    }

    console.log("nums:", nums);
  }

  return nums;
};

module.exports = moveZeroes;
