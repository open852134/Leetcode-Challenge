### 0005-Longest-Palindromic-Substring

Given a string s, return the longest palindromic substring in s.

### Sample

Example 1:

```
Input: s = "babad"
Output: "bab"
Explanation: "aba" is also a valid answer.
```

Example 2:

```
Input: s = "cbbd"
Output: "bb"
```

### Note

**怎麼判斷是回文**

解法：可以透過取的每個文字排列組合後，在跟 reverse 後的結果來檢查是否一樣
但這樣的做法 O(n^3) 而且如果遇到常字串運算時間會非常久

```
babad [reverse] dabab
baba [reverse] abab
bab [reverse] bab
ba [reverse] ba

abad [reverse] daba
aba [reverse] aba
ab [reverse] ab

bad [reverse] dab
ba [reverse] ba

ad [reverse] da

d [reverse] d

result = bab || aba
```
