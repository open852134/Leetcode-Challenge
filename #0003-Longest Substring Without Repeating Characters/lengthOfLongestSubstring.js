/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  if (s.length === 1) {
    return 1;
  }

  var start = 0;
  var maxLen = 0;
  var map = new Map();

  for (var i = 0; i < s.length; i++) {
    var ch = s[i];

    console.log("map", map);
    console.log("start", start);

    if (map.get(ch) >= start) start = map.get(ch) + 1;

    map.set(ch, i);

    console.log("after map", map);
    console.log("after start", start);
    console.log("index", i);

    maxLen = Math.max(maxLen, i - start + 1);
  }

  return maxLen;
};

module.exports = lengthOfLongestSubstring;
