# Merge Strings Alternately

You are given two strings word1 and word2. Merge the strings by adding letters in alternating order, starting with word1. If a string is longer than the other, append the additional letters onto the end of the merged string.

Return the merged string.

## Sample

```plaintext
Input: word1 = "abc", word2 = "pqr"
Output: "apbqcr"
Explanation: The merged string will be merged as so:
word1:  a   b   c
word2:    p   q   r
merged: a p b q c r
```

```plaintext
Input: word1 = "ab", word2 = "pqrs"
Output: "apbqrs"
Explanation: Notice that as word2 is longer, "rs" is appended to the end.
word1:  a   b 
word2:    p   q   r   s
merged: a p b q   r   s
```

```plaintext
Input: word1 = "abcd", word2 = "pq"
Output: "apbqcd"
Explanation: Notice that as word1 is longer, "cd" is appended to the end.
word1:  a   b   c   d
word2:    p   q 
merged: a p b q c   d
```

## Note

> 解題方向

Input 會是兩個 string[]，從 word1 開始跑回圈，同時檢查 word2 有沒有資料，然後將 string concat 在一起，
全部跑完後再判斷 word2 長度是否大於 word1，如果大於再把 word2 剩餘字元 concat 到結果上。

> 時間複雜度

O(N)，因為至少要跑完所有 word1 項目

> Edge Case

如過 word1 或是 word2 其中個長度為 0，就可以直接 return join('') 結果。
