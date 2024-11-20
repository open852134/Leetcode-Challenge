/**
 * @param {string} s
 * @return {string}
 */
var removeStars = function (s) {
  return s.split("").reduce((accumulator, currentValue) => {
    if (currentValue === "*") {
      return accumulator.slice(0, -1);
    }

    return accumulator + currentValue;
  }, []);
};
Ｆ;

module.exports = removeStars;
