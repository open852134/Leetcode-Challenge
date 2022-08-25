### #0394-Decode String

Given an encoded string, return its decoded string.

The encoding rule is: k[encoded_string], where the encoded_string inside the square brackets is being repeated exactly k times. Note that k is guaranteed to be a positive integer.

You may assume that the input string is always valid; there are no extra white spaces, square brackets are well-formed, etc. Furthermore, you may assume that the original data does not contain any digits and that digits are only for those repeat numbers, k. For example, there will not be input like 3a or 2[4].

The test cases are generated so that the length of the output will never exceed 105.

### Sample

Example 1:

```
Input: s = "3[a]2[bc]"
Output: "aaabcbc"
```

Example 2:

```
Input: s = "3[a2[c]]"
Output: "accaccacc"
```

Example 3:

```
Input: s = "2[abc]3[cd]ef"
Output: "abcabccdcdcdef"
```

### Note

- 如何解析字串中的 `[ ]`
- 如何處理先後順序的關係，例如 `"3[a2[c]]"`

可以透過 stack 機制，把要遇到括弧要處理的項目依序丟進去，等到遇到結尾時再出去來做計算，<br>
文字可以透過 string.repeat(Int) 的方式來實作乘機

當每次跑回圈時分別紀錄當前的 數字、英文<br>
如果遇到 `[` 將目前的文字、數字丟入 Stack，
直到遇到 `]` 結尾時再將當前字串做 repeat 然後加上前一個 Stack 內的字串

`const currentString = stackString + currentString.repeat(parseInt(stackDigital))`
