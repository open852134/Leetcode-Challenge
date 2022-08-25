/**
 * @param {string} s
 * @return {string}
 */
var decodeString = function (s) {
  let stack = [],
    currStr = "",
    currDig = "";

  for (let i of s) {
    if (i === "[") {
      stack.push(currStr);
      stack.push(currDig);
      currStr = "";
      currDig = "";
    } else if (i === "]") {
      let prevDig = stack.pop();
      let prevStr = stack.pop();

      currStr = prevStr + currStr.repeat(parseInt(prevDig));
    } else if (!isNaN(i)) {
      currDig += i;
    } else {
      currStr += i;
    }
    console.log({ i, currStr, currDig, stack });
  }
  return currStr;
};

module.exports = decodeString;
