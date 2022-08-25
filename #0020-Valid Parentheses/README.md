### Valid Parentheses

Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

An input string is valid if:

Open brackets must be closed by the same type of brackets.
Open brackets must be closed in the correct order.

### Sample

Example 1:

```
Input: s = "()"
Output: true
```

Example 2:

```
Input: s = "()[]{}"
Output: true
```

Example 3:

```
Input: s = "(]"
Output: false
```

### Note

輸入只會有 `(`, `)`, `{`, `}`, `[`, `]` 這幾個項目<br>
需要檢查每個括弧的開始與結束是否合法，例如：

- `[({}){}]` : true
- `[]{()}` : true
- `[{(})}]`: false
- `((`: false

**Thinking:**

感覺可以透過 Stack 的方式依序把開頭的 `(`, `{`, `[` 放進去<br>
當遇到結尾符號 `)`, `}`, `]` 時，將最後一個 stack pop 出來的要能對應開頭的括弧符號<br>
如果不是就可以回傳 false 結束迴圈

**Edge case:**

- 空直的檢查
- 長度不是偶數可以直接 return false
