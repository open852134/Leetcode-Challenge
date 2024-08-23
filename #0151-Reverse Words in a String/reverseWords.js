/**
 * @param {string} s
 * @return {string}
 */
function reverseWords(s) {
  return s
    .split(" ")
    .filter((s) => s !== "")
    .reverse()
    .join(" ");
}

module.exports = reverseWords;
