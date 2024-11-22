### #0394-Decode String

Given an encoded string, return its decoded string.

The encoding rule is: k[encoded_string], where the encoded_string inside the square brackets is being repeated exactly k times. Note that k is guaranteed to be a positive integer.

You may assume that the input string is always valid; there are no extra white spaces, square brackets are well-formed, etc. Furthermore, you may assume that the original data does not contain any digits and that digits are only for those repeat numbers, k. For example, there will not be input like 3a or 2[4].

The test cases are generated so that the length of the output will never exceed 105.

### Sample

Example 1:

```plaintext
Input: s = "3[a]2[bc]"
Output: "aaabcbc"
```

Example 2:

```plaintext
Input: s = "3[a2[c]]"
Output: "accaccacc"
```

Example 3:

```plaintext
Input: s = "2[abc]3[cd]ef"
Output: "abcabccdcdcdef"
```

### Note

- 如何解析字串中的 `[ ]`
- 如何處理先後順序的關係，例如 `"3[a2[c]]"`
文字可以透過 `string.repeat(Int)` 的方式來實作乘機

可以透過 stack 機制，把要遇到括弧要處理的項目依序丟進去，等到遇到結尾時再出去來做計算，<br>


當每次跑回圈時分別紀錄當前的 數字、英文<br>
如果遇到 `[` 將目前的文字、數字丟入 Stack，
直到遇到 `]` 結尾時再將 Stack 最後兩筆資料 pop 出來做字串 repeat

`const currentString = stackString + currentString.repeat(parseInt(stackDigital))`


處理字串: 3[a]2[bc]

Stack = []
currMultiply = ''
currString = ''

`Char 1.`

- char = 3, 數字
- stack = []
- currMultiply = 3
- currString = ''

`Char 2.`

- char = `[`, 分別將 currString,currMultiply 推入 stack
- stack = ['', 3]
- currentString = ''
- currMultiply = ''

`Char 3.`
- char = a
- stack = ['', 3]
- currentString = 'a'
- currMultiply = ''

`Char 4.`
- char = `]`, 將 stack 內的資料 pop 出來做處理
- let prevDig = stack.pop() // 3;<br>
  let prevStr = stack.pop() // '';<br>
  currentString = prevStr + currentString.repeat(prevDig); // '' + 'aaa'
- stack = []
- currentString = 'aaa'
- currMultiply = ''

`Char 5.`
- char = 2, 數字
- stack = []
- currMultiply = 2
- currString = 'aaa'

`Char 6.`
- char = `[`, 分別將 currString,currMultiply 推入 stack
- stack = ['aaa', 2]
- currentString = ''
- currMultiply = ''

`Char 7.`
- char = b
- stack = ['aaa', 2]
- currentString = 'b'
- currMultiply = ''

`Char 8.`
- char = c
- stack = ['aaa', 2]
- currentString = 'bc'
- currMultiply = ''

`Char 9.`
- char = `]`, 將 stack 內的資料 pop 出來做處理
- let prevDig = stack.pop() // 2;<br>
let prevStr = stack.pop() // 'aaa';<br>
currentString = prevStr + currentString.repeat(prevDig); // 'aaa' + 'bcbc'<br>
- stack = []
- currentString = 'aaabcbc'
- currMultiply = ''