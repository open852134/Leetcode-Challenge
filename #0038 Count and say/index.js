/**
 * @param {number} n
 * @return {string}
 */
var countAndSay = function(n) {
  var nextAry = [1];
  for (let i = 0; i <= n; i++) {
    if (i > 1) {
      nextAry = countSay(nextAry);
    }
  }
  return nextAry.join("");
};

function countSay(ary) {
  var result = [];
  var lastCharacter = ary[0];
  var count = 0;

  for (let i = 0; i < ary.length; i++) {
    var tChar = ary[i];
    if (tChar == lastCharacter) {
      lastCharacter = tChar;
      count += 1;
    }
    if (tChar != lastCharacter) {
      result.push(count);
      result.push(lastCharacter);
      lastCharacter = tChar;
      count = 1;
    }
  }

  result.push(count);
  result.push(lastCharacter);

  return result;
}
