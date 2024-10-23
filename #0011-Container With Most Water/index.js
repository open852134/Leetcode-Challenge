/**
 * @param {number[]} height
 * @return {number}
 */

/** Solution1
  var maxArea = function (height) {
    let result = 0;
    for (let basicIndex = 0; basicIndex < height.length; basicIndex++) {
      for (let measureIndex = 0; measureIndex < height.length; measureIndex++) {
        let x = Math.abs(basicIndex - measureIndex);
        let y = Math.min(height[basicIndex], height[measureIndex]);

        result = Math.max(x * y, result);
      }
    }

    return result;
  };
*/

var maxArea = function (height) {
  let left = 0;
  let right = height.length - 1;
  let result = 0;

  let count = 1;

  while (left < right) {
    const x = right - left;
    const y = Math.min(height[left], height[right]);

    if (height[left] < height[right]) {
      left++;
    } else {
      right--;
    }

    result = Math.max(x * y, result);

    count++;
  }
  return result;
};

module.exports = maxArea;
