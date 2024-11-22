/**
 * @param {string} s
 * @return {string}
 */
var decodeString = function (s) {
  let stack = [],
    currStr = "",
    currMultiply = "";

  for (let char of s) {
    if (char === "[") {
      stack.push(currStr);
      stack.push(currMultiply);
      currStr = "";
      currMultiply = "";
    } else if (char === "]") {
      let prevDig = stack.pop();
      let prevStr = stack.pop();

      currStr = prevStr + currStr.repeat(parseInt(prevDig));
    } else if (!isNaN(char)) {
      currMultiply += char;
    } else {
      currStr += char;
    }
    console.log({ char, currStr, currMultiply, stack });
  }
  return currStr;
};

module.exports = decodeString;
