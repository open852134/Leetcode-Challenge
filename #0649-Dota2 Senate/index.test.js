const predictPartyVictory = require("./index");

describe("predictPartyVictory", () => {
  test("input RD should return Radiant", () => {
    const input = "RD";
    const expectResult = "Radiant";
    const result = predictPartyVictory(input);

    expect(result).toEqual(expectResult);
  });

  test("input RDD should return Dire", () => {
    const input = "RDD";
    const expectResult = "Dire";
    const result = predictPartyVictory(input);

    expect(result).toEqual(expectResult);
  });

  test("input RDRDDDR should return Dire", () => {
    const input = "RDRDDDR";
    const expectResult = "Dire";
    const result = predictPartyVictory(input);

    expect(result).toEqual(expectResult);
  });

  test("input RDRD should return Radiant", () => {
    const input = "RDRD";
    const expectResult = "Radiant";
    const result = predictPartyVictory(input);

    expect(result).toEqual(expectResult);
  });

  test("input DDRRR should return Dire", () => {
    const input = "DDRRR";
    const expectResult = "Dire";
    const result = predictPartyVictory(input);

    expect(result).toEqual(expectResult);
  });
});
