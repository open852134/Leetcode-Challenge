const longestPalindrome = require("./index");

describe("longestPalindrome", () => {
  test("input: [babad] should be return [bab]", () => {
    const input = "babad";
    const expectResult1 = "aba";
    const expectResult2 = "bab";

    const result = longestPalindrome(input);

    expect(result === expectResult1 || result === expectResult2).toEqual(true);
  });

  test("input: [cbbd] should be return [bb]", () => {
    const input = "cbbd";
    const expectResult = "bb";

    expect(longestPalindrome(input)).toEqual(expectResult);
  });

  test("input: [bbgghh] should be return [bbgghh]", () => {
    const input = "bbgghh";
    const expectResult1 = "bb";
    const expectResult2 = "gg";
    const expectResult3 = "hh";

    const result = longestPalindrome(input);

    expect(
      result === expectResult1 || result === expectResult2 || result === expectResult3
    ).toEqual(true);
  });

  test("input: [a] should be return [a]", () => {
    const input = "a";
    const expectResult = "a";

    expect(longestPalindrome(input)).toEqual(expectResult);
  });

  test("input: [aa] should be return [aa]", () => {
    const input = "aa";
    const expectResult = "aa";

    expect(longestPalindrome(input)).toEqual(expectResult);
  });

  test("input: [ac] should be return [ac]", () => {
    const input = "ac";
    const expectResult = "a";

    expect(longestPalindrome(input)).toEqual(expectResult);
  });

  test('input: ["zudfweormatjycujjirzjpyrmaxurectxrtqedmmgergwdvjmjtstdhcihacqnothgttgqfywcpgnuvwglvfiuxteopoyizgehkwuvvkqxbnufkcbodlhdmbqyghkojrgokpwdhtdrwmvdegwycecrgjvuexlguayzcammupgeskrvpthrmwqaqsdcgycdupykppiyhwzwcplivjnnvwhqkkxildtyjltklcokcrgqnnwzzeuqioyahqpuskkpbxhvzvqyhlegmoviogzwuiqahiouhnecjwysmtarjjdjqdrkljawzasriouuiqkcwwqsxifbndjmyprdozhwaoibpqrthpcjphgsfbeqrqqoqiqqdicvybzxhklehzzapbvcyleljawowluqgxxwlrymzojshlwkmzwpixgfjljkmwdtjeabgyrpbqyyykmoaqdambpkyyvukalbrzoyoufjqeftniddsfqnilxlplselqatdgjziphvrbokofvuerpsvqmzakbyzxtxvyanvjpfyvyiivqusfrsufjanmfibgrkwtiuoykiavpbqeyfsuteuxxjiyxvlvgmehycdvxdorpepmsinvmyzeqeiikajopqedyopirmhymozernxzaueljjrhcsofwyddkpnvcvzixdjknikyhzmstvbducjcoyoeoaqruuewclzqqqxzpgykrkygxnmlsrjudoaejxkipkgmcoqtxhelvsizgdwdyjwuumazxfstoaxeqqxoqezakdqjwpkrbldpcbbxexquqrznavcrprnydufsidakvrpuzgfisdxreldbqfizngtrilnbqboxwmwienlkmmiuifrvytukcqcpeqdwwucymgvyrektsnfijdcdoawbcwkkjkqwzffnuqituihjaklvthulmcjrhqcyzvekzqlxgddjoir"] should be [gykrkyg]', () => {});
});
