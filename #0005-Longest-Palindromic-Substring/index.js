/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
  let result = "";
  let centerIndex = 0;

  for (let i = 1; i < s.length; i++) {
    let currentChat = s[i];
    let leftChat = s[i - 1];
    let rightChat = s[i + 1];

    if (
      leftChat === rightChat ||
      leftChat === currentChat ||
      rightChat === currentChat
    ) {
      centerIndex = i;
      break;
      // result = `${leftChat}${currentChat}${rightChat}`;
    }

    // if () {
    //   centerIndex = i;
    //   result = `${leftChat}${currentChat}`;
    // }

    // if (rightChat === currentChat) {
    //   centerIndex = i;
    //   result = `${leftChat}${rightChat}`;
    // }
  }

  // while(){

  // }

  return result;
};

module.exports = longestPalindrome;
