### #0003-Longest Substring Without Repeating Characters

Given a string s, find the length of the longest substring without repeating characters.

找到字串中不連續字母的最長組合

### Sample

Example 1:

```
Input: s = "abcabcbb"
Output: 3
Explanation: The answer is "abc", with the length of 3.
```

Example 2:

```
Input: s = "bbbbb"
Output: 1
Explanation: The answer is "b", with the length of 1.
```

Example 3:

```
Input: s = "pwwkew"
Output: 3
Explanation: The answer is "wke", with the length of 3.
Notice that the answer must be a substring, "pwke" is a subsequence and not a substring.
```

### Note

看起來應該是先透過 for loop 遍歷每個 char 然後往後面去找是否出現重複

```
abcabcbb
a,b,c,[a] 重複，最長組合 [a,b,c]

abcabcbb
b,c,a,[b] 重複，最長組合 [b,c,a]，但長度沒有超過前一次結果，所以 output 還是 3

abcabcbb
c,a.b.[c] 重複，最長組合 [c,a,b]，但長度沒有超過前一次結果，所以 output 還是 3

以此類推去檢查每個組合
```

但這樣的方式時間複雜度會是 O(n^2)

優化版本：
可以透過 Map 的特性紀錄每個字元目前的位置
當再次遇到同樣字元時，只要用現在位置減掉前一次出現得位置，就可以得出不重複的字串長度
如果目前自串長度大，那就更新 result value
這樣時間複雜度就會是 O(n)

ex 'abcabcbb' 跑完迴圈後應該會是這樣的過程

a : 0 第一次出現
b : 1 第一次出現
c : 2 第一次出現
a : 3 第二次出現， Max(3 - 0 = 3, result) 取最大的作為結果回傳
b : 4 第二次出現， Max(4 - 1 = 3, result) 取最大的作為結果回傳
c : 5 第二次出現， Max(5 - 2 = 3, result) 取最大的作為結果回傳
b : 6 第三次出現， Max(6 - 4 = 2, result) 取最大的作為結果回傳
b : 7 第四次出現， Max(7 - 6 = 1, result) 取最大的作為結果回傳
