/**
 * @param {string} senate
 * @return {string}
 */
const senateResult = {
  R: "Radiant",
  D: "Dire",
};

var predictPartyVictory = function (senate) {
  const R = [];
  const D = [];
  const n = senate.length;

  // Add senators to respective queues
  for (let i = 0; i < n; i++) {
    if (senate[i] === "R") {
      R.push(i);
    } else {
      D.push(i);
    }
  }

  console.log({ R, D });

  // Simulate the voting process
  while (R.length > 0 && D.length > 0) {
    const rIndex = R.shift();
    const dIndex = D.shift();

    if (rIndex < dIndex) {
      R.push(rIndex + n);
    } else {
      D.push(dIndex + n);
    }

    console.log({ R, D });
  }

  return R.length > 0 ? "Radiant" : "Dire";
};

module.exports = predictPartyVictory;
